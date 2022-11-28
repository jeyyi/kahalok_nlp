import React from "react";

const Card = () => {
  return (
    <div class="max-w-full rounded-lg overflow-hidden shadow-lg h-64 min-h-full bg-white">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">CARD</div>
        <p class="text-gray-700 text-base">
          
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};

export default Card;
