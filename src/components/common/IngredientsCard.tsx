import React from "react";
import type { IngredientCardProps } from "../../lib/interfaces";

const IngredientCard: React.FC<IngredientCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="h-full rounded-2xl border border-secondary-dark/20 bg-white p-3 sm:p-5 shadow-sm transition hover:-translate-y-0.5">
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
        <div className="relative shrink-0 self-start">
          <span className="absolute -inset-1 rounded-full bg-primary/15 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-primary/10 overflow-hidden">
            <img
              src={image}
              alt={`${title}-image`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="min-w-0">
          <h4 className="text-sm sm:text-base font-semibold leading-snug">
            {title}
          </h4>

          <p className="mt-1 text-[11px] sm:text-sm text-neutral-soft leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IngredientCard;
