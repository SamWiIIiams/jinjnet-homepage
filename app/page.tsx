"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Image, Gauge, MonitorSmartphone, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const services = [
    {
      name: "Immich",
      description: "Personal photo and video library for your memories.",
      icon: Image,
      url: "https://immich.jinjnet.com",
    },
    {
      name: "Jellyfin",
      description: "Stream your media anywhere, anytime.",
      icon: Film,
      url: "https://jellyfin.jinjnet.com",
    },
    {
      name: "LibreSpeed",
      description: "Test your connection speed on your own server.",
      icon: Gauge,
      url: "https://speed.jinjnet.com",
    },
    {
      name: "Jellyseerr",
      description: "Request movies and shows for your Jellyfin library.",
      icon: MonitorSmartphone,
      url: "https://requests.jinjnet.com",
    },
  ];

  const sharedAlbums = [
    {
      name: "Wedding Album",
      description: "Shared memories from the wedding of Marissa and Sam.",
      icon: Share2,
      url: "https://immich.jinjnet.com/s/wedding",
    },
    {
      name: "MTB Adventures",
      description: "Mountain biking photos and videos.",
      icon: Share2,
      url: "https://immich.jinjnet.com/s/MTB",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Jinjnet
      </motion.h1>

      {/* Main services section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full mb-16">
        {services.map((service, idx) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 + 0.3 }}
          >
            <Card className="bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20">
              <CardHeader className="flex flex-col items-center text-center">
                <service.icon className="w-12 h-12 mb-3 text-blue-400" />
                <CardTitle>{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm text-center">
                <p>{service.description}</p>
                <Button
                  className="mt-4 w-full bg-blue-500 hover:bg-blue-600"
                  asChild
                >
                  <a href={service.url} target="_blank" rel="noopener noreferrer">
                    Visit
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Shared albums section */}
      <motion.h2
        className="text-3xl font-semibold mb-6 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Shared Immich Albums
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {sharedAlbums.map((album, idx) => (
          <motion.div
            key={album.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 + 0.2 }}
          >
            <Card className="bg-slate-800 border border-slate-700 hover:border-green-500 transition-all hover:shadow-lg hover:shadow-green-500/20">
              <CardHeader className="flex flex-col items-center text-center">
                <album.icon className="w-10 h-10 mb-2 text-green-400" />
                <CardTitle>{album.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm text-center">
                <p>{album.description}</p>
                <Button
                  className="mt-4 w-full bg-green-500 hover:bg-green-600"
                  asChild
                >
                  <a href={album.url} target="_blank" rel="noopener noreferrer">
                    View Album
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <footer className="mt-16 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Jinjnet. All rights reserved.</p>
      </footer>
    </main>
  );
}
