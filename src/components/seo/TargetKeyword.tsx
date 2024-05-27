"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import { X } from "lucide-react";

export default function TargetKeyWord() {
  const [value, setValue] = useState(null);
  const [chips, setChips] = useState([]);

  function handleChange(event: any) {
    setValue(event.target.value);
  }

  function handleClick() {
    if (value) {
      setChips([...chips, value]);
      setValue(null);
    }
  }

  function handleDelete(chipToDelete: any) {
    setChips(chips.filter((chip) => chip !== chipToDelete));
  }

  return (
    <div className="flex flex-col w-full md:w-[40%] px-4 justify-center">
      <div className="text-[#6D6D6D] pb-2 font-semibold">Target Keyword</div>
      <div className="flex w-full items-center justify-center gap-2">
        <Input
          className="rounded-xl bg-[#FFFFFF]  w-full border-0"
          type="search"
          value={value || ""}
          onChange={handleChange}
        />
        <Button
          variant="outline"
          onClick={handleClick}
          className="bg-[#40F440] rounded-xl w-26 h-10">
          Add
        </Button>
      </div>
      <div className="py-2 flex w-full gap-2 overflow-auto">
        {chips.map((chipValue, index) => (
          <div className="flex" key={index}>
            <Chip
              label={chipValue}
              onClick={() => console.log("Chip clicked:", chipValue)}
              onDelete={() => handleDelete(chipValue)}
              deleteIcon={<X size="15px" color="#6D6D6D" />}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
