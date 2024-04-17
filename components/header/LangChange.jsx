"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaLanguage } from "react-icons/fa6";

const LangChange = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showManu, setShowManu] = useState(false);

  const languages = [
    {
      code: "en",
      language: "English",
    },
    {
      code: "bn",
      language: "Bangla",
    },
  ];

  const languageFound = languages.find((lang) => pathname.includes(lang.code));
  const [setectedLang, setSelectedLang] = useState(languageFound, languages[0]);

  const handleLangChanging = (langCode) => {
    setSelectedLang({
      ...setSelectedLang,
      code: langCode,
      language: langCode === "en" ? "English" : "Bangla",
    });
    setShowManu(false);
    router.push(`/${langCode}`);
  };

  return (
    <div className="relative">
      <button
        className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
        href="#"
        onClick={() => setShowManu(!showManu)}
      >
        <FaLanguage className="text-2xl " />
      </button>
      {showManu && (
        <div className="absolute right-0 top-full mt-2 w-32 rounded-md bg-black shadow-teal-700  border border-teal-600 p-2 z-10 shadow-lg">
          <ul>
            {languages.map((lang) => (
              <li
                onClick={() => handleLangChanging(lang.code)}
                key={lang.code}
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 hover:text-black"
              >
                {lang.language}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LangChange;
