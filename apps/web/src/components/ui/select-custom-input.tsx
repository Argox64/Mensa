"use client"

import { ChangeEvent, useState } from "react"
import { Input } from "@/components/ui/input"

interface EditableSelectProps {
    options: string[]
    onChange?: (value: string) => void,
    placeholder?: string
}

export default function EditableSelect(props: EditableSelectProps) {
  const { options, onChange, placeholder } = props
  const [value, setValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options)
  const [isOpen, setIsOpen] = useState(false)
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if(onChange) onChange(newValue);
    setValue(newValue);
    const opts = options.filter((option) => option.toLowerCase().includes(newValue.toLowerCase()))
    setFilteredOptions(opts);
    setIsOpen(opts.length > 0);

  }
  const handleOptionSelect = (option : string) => {
    if(onChange) onChange(option);
    setValue(option);
    setIsOpen(false);
  }
  return (
    <div className="relative w-full max-w-md">
      <Input value={value} onChange={handleInputChange} placeholder={placeholder || "Select an option"} className="pr-10" />
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-2">
            {filteredOptions.map((option) => (
              <li
                key={option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}