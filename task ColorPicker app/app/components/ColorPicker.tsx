'use client'

import { useState, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful'
import { colord, extend } from 'colord'
import cmykPlugin from 'colord/plugins/cmyk'
import a11yPlugin from 'colord/plugins/a11y'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent } from "../components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover"

extend([cmykPlugin, a11yPlugin])

interface SavedColor {
  hex: string
  name: string
}

interface ColorValues {
  rgb: { r: number; g: number; b: number }
  hsl: { h: number; s: number; l: number }
  hsv: { h: number; s: number; v: number }
  cmyk: { c: number; m: number; y: number; k: number }
}

export default function ColorPicker() {
  const [color, setColor] = useState("#4685ce")
  const [colorName, setColorName] = useState("")
  const [savedColors, setSavedColors] = useState<SavedColor[]>([])
  const [colorValues, setColorValues] = useState<ColorValues>({
    rgb: { r: 70, g: 133, b: 206 },
    hsl: { h: 212, s: 58, l: 54 },
    hsv: { h: 212, s: 66, v: 81 },
    cmyk: { c: 0.66, m: 0.35, y: 0, k: 0.19 }
  })

  useEffect(() => {
    const c = colord(color)
    setColorValues({
      rgb: c.toRgb(),
      hsl: c.toHsl(),
      hsv: c.toHsv(),
      cmyk: c.toCmyk()
    })
  }, [color])

  const getTriadColors = () => {
    const c = colord(color)
    const hsl = c.toHsl()
    return [
      color,
      colord({ h: (hsl.h + 120) % 360, s: hsl.s, l: hsl.l }).toHex(),
      colord({ h: (hsl.h + 240) % 360, s: hsl.s, l: hsl.l }).toHex()
    ]
  }

  const getComplementaryColors = () => {
    const c = colord(color)
    const hsl = c.toHsl()
    return [
      color,
      colord({ h: (hsl.h + 180) % 360, s: hsl.s, l: hsl.l }).toHex(),
      colord({ h: (hsl.h + 60) % 360, s: hsl.s, l: hsl.l }).toHex(),
      colord({ h: (hsl.h + 240) % 360, s: hsl.s, l: hsl.l }).toHex(),
      colord({ h: (hsl.h + 30) % 360, s: hsl.s, l: hsl.l }).toHex(),
      colord({ h: (hsl.h + 90) % 360, s: hsl.s, l: hsl.l }).toHex()
    ]
  }

  const handleSaveColor = () => {
    if (colorName.trim()) {
      setSavedColors([...savedColors, { hex: color, name: colorName }])
      setColorName("")
    }
  }

  const handleRemoveColor = (index: number) => {
    setSavedColors(savedColors.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen w-full bg-background p-4 md:p-8">
      <Card className="mx-auto max-w-full">
        <CardContent className="grid gap-8 p-6 md:grid-cols-2">
          {/* Color Picker Section */}
          <div className="space-y-4">
            <div className="text-lg font-semibold">Pick a color</div>
            <div className="relative">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full aspect-square md:aspect-video"
                    style={{ backgroundColor: color }}
                  >
                    <span className="sr-only">Pick a color</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-3">
                  <HexColorPicker color={color} onChange={setColor} />
                </PopoverContent>
              </Popover>
            </div>
            <div className="text-center font-mono text-lg">{color}</div>
          </div>

          {/* Color Values Section */}
          <div className="space-y-6">
            <div className="text-lg font-semibold">Adjust Colors</div>
            
            {/* RGB Section */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">RGB</Label>
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <Label className="text-xs">R</Label>
                  <Input value={Math.round(colorValues.rgb.r)} readOnly />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">G</Label>
                  <Input value={Math.round(colorValues.rgb.g)} readOnly />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">B</Label>
                  <Input value={Math.round(colorValues.rgb.b)} readOnly />
                </div>
              </div>
            </div>

            {/* HSL Section */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">HSL</Label>
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <Label className="text-xs">H</Label>
                  <Input value={Math.round(colorValues.hsl.h)} readOnly />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">S</Label>
                  <Input value={Math.round(colorValues.hsl.s)} readOnly />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">L</Label>
                  <Input value={Math.round(colorValues.hsl.l)} readOnly />
                </div>
              </div>
            </div>

            {/* CMYK Section */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">CMYK</Label>
              <div className="grid grid-cols-4 gap-2">
                <div className="space-y-1">
                  <Label className="text-xs">C</Label>
                  <Input value={Math.round(colorValues.cmyk.c * 100)} readOnly />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">M</Label>
                  <Input value={Math.round(colorValues.cmyk.m * 100)} readOnly />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Y</Label>
                  <Input value={Math.round(colorValues.cmyk.y * 100)} readOnly />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">K</Label>
                  <Input value={Math.round(colorValues.cmyk.k * 100)} readOnly />
                </div>
              </div>
            </div>
          </div>

          {/* Color Harmonies Section */}
          <div className="space-y-6 md:col-span-2">
            {/* Triad Colors */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Triad Colors</Label>
              <div className="grid grid-cols-3 gap-2">
                {getTriadColors().map((c, i) => (
                  <Button
                    key={i}
                    className="h-16 md:h-20"
                    style={{ backgroundColor: c }}
                    onClick={() => setColor(c)}
                  >
                    <span className="font-mono text-xs text-white drop-shadow-md">
                      {c}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Complementary Colors */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Complementary Colors</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {getComplementaryColors().map((c, i) => (
                  <Button
                    key={i}
                    className="h-16 md:h-20"
                    style={{ backgroundColor: c }}
                    onClick={() => setColor(c)}
                  >
                    <span className="font-mono text-xs text-white drop-shadow-md">
                      {c}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Save Color Section */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Save Color</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Color Name"
                  value={colorName}
                  onChange={(e) => setColorName(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleSaveColor}>Save Color</Button>
              </div>
              <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                {savedColors.map((savedColor, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 border rounded-md">
                    <div
                      className="w-12 h-8 rounded border"
                      style={{ backgroundColor: savedColor.hex }}
                    />
                    <span className="flex-1 font-mono text-sm">{savedColor.name}</span>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleRemoveColor(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
