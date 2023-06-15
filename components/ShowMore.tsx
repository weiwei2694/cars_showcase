"use client";
import { ShowMoreProps } from "@/types";
import { CustomButton } from "@/components";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const handleSetLimit = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit.toString());
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleSetLimit}
        />
      )}
    </div>
  );
};

export default ShowMore;
