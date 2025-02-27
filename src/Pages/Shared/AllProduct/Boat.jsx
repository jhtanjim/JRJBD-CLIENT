"use client"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { Anchor, Ship, Droplets, Compass, ChevronLeft, ChevronRight } from "lucide-react"

const Boat = () => {
  const params = useParams()
  const id = params?.id
  const [boat, setBoat] = useState(null)
  const [selectedImage, setSelectedImage] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    fetch("/boat.json")
      .then((res) => res.json())
      .then((data) => {
        const boatData = data[id]
        if (boatData) {
          // Filter out any placeholder images or invalid URLs
          boatData.images = boatData.images.filter(
            (img) => img && !img.includes("placeholder.svg") && (img.startsWith("http") || img.startsWith("/")),
          )
          setBoat(boatData)
          if (boatData.images.length > 0) {
            setSelectedImage(boatData.images[0])
          }
        }
      })
      .catch((error) => console.error("Error fetching boat data:", error))
  }, [id])

  const handleNextImage = () => {
    if (!boat || boat.images.length <= 1) return
    const nextIndex = (currentImageIndex + 1) % boat.images.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(boat.images[nextIndex])
  }

  const handlePrevImage = () => {
    if (!boat || boat.images.length <= 1) return
    const prevIndex = (currentImageIndex - 1 + boat.images.length) % boat.images.length
    setCurrentImageIndex(prevIndex)
    setSelectedImage(boat.images[prevIndex])
  }

  if (!boat) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  // Format price properly - remove commas and then format with locale
  const formatPrice = (priceStr) => {
    // Remove any commas from the string, then convert to number
    const price = Number.parseFloat(priceStr.replace(/,/g, ""))
    return !isNaN(price) ? price.toLocaleString() : priceStr
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-10 text-center"
        >
          {boat.model}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Boat Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl mb-6 aspect-w-16 aspect-h-9 bg-white">
              <div className="relative w-full h-64 sm:h-80 md:h-96">
                <img
                  src={selectedImage || "/placeholder.svg?height=400&width=600"}
                  alt={boat.model}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />

                {/* Only show navigation arrows if there's more than one image */}
                {boat.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6 text-blue-600" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6 text-blue-600" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Only show thumbnail grid if there's more than one image */}
            {boat.images.length > 1 && (
              <div
                className={`grid gap-2 sm:gap-4 ${
                  boat.images.length === 2 ? "grid-cols-2" : boat.images.length === 3 ? "grid-cols-3" : "grid-cols-4"
                }`}
              >
                {boat.images
                  .filter((img) => img && !img.includes("placeholder.svg"))
                  .map((img, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`${boat.model} view ${index + 1}`}
                        onClick={() => {
                          setSelectedImage(img)
                          setCurrentImageIndex(index)
                        }}
                        className={`w-full h-full object-cover cursor-pointer transition-all duration-300 ${
                          selectedImage === img
                            ? "ring-4 ring-blue-500 scale-105"
                            : "hover:scale-105 hover:ring-2 hover:ring-blue-300"
                        }`}
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=100&width=100"
                          e.currentTarget.classList.add("error-image")
                        }}
                      />
                    </div>
                  ))}
              </div>
            )}
          </motion.div>

          {/* Boat Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-2xl p-6 sm:p-8"
          >
            <div className="flex items-center mb-6">
              <Ship className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mr-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Specifications</h2>
            </div>
            <div className="space-y-4 text-base sm:text-lg text-gray-600">
              <p>
                <span className="font-semibold">Size:</span> {boat.size}
              </p>
              <p>
                <span className="font-semibold">Engine:</span> {boat.engine}
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <div className="flex items-center mb-4 sm:mb-6">
                <Anchor className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mr-3" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Key Features</h2>
              </div>
              <ul className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {Object.entries(boat.features).map(([key, value]) => (
                  <li key={key} className="flex items-start text-gray-600">
                    <Compass className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="capitalize font-medium">{key.replace(/_/g, " ")}:</span>{" "}
                      <span className="ml-1">
                        {Array.isArray(value) ? (
                          <ul className="list-disc ml-5 mt-1 space-y-1">
                            {value.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          value.toString()
                        )}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 sm:mt-10">
              <div className="flex items-center mb-4 sm:mb-6">
                <Droplets className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mr-3" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Pricing</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(boat.price).map(([size, price]) => (
                  <div
                    key={size}
                    className="bg-blue-50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-md hover:bg-blue-100"
                  >
                    <p className="text-lg sm:text-xl font-bold text-blue-800">{size}</p>
                    <p className="text-xl sm:text-2xl font-extrabold text-blue-600">${formatPrice(price)}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 sm:mt-16 bg-white rounded-xl shadow-2xl p-6 sm:p-8"
        >
          <div className="flex items-center mb-6">
            <Ship className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mr-3" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">More Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-base sm:text-lg text-gray-600">
            <p>
              <span className="font-semibold">Finish:</span> {boat.finish}
            </p>
            <p>
              <span className="font-semibold">Lead Time:</span> {boat.lead_time}
            </p>
            <p>
              <span className="font-semibold">Payment Terms:</span> {boat.payment_terms}
            </p>
            <p>
              <span className="font-semibold">Shipment:</span> {boat.shipment}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Boat

