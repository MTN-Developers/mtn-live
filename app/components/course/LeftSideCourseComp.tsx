"use client";
import React from "react";
import { Breadcrumb, Tabs } from "antd";
import starIcon from "@/assets/images/Star.svg";
import clockIcon from "@/assets/images/Clock@2x.svg";
import usersIcon from "@/assets/images/Users.svg";
import notebookIcon from "@/assets/images/Notebook.svg";
import type { TabsProps } from "antd";
import Image from "next/image";

import { useTranslationContext } from "@/contexts/TranslationContext";
import { useTranslations } from "next-intl";

interface IProps {
  items: TabsProps["items"];
  onChange: TabsProps["onChange"];
  course: SubscribedCourse;
}

const LeftSideCourseComp = ({ items, onChange, course }: IProps) => {
  const t = useTranslations("LeftSideCourseComp");
  const { locale } = useTranslationContext();
  return (
    <div className="font-[pnu] max-w-full">
      <div className="mt-4 mb-8 right-4 z-10">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: t("Home"),
              href: "/",
            },
            {
              title: course?.category,
              href: "/",
            },
            {
              title: locale == "ar" ? course.name_ar : course?.name_en, // Switch to `name_en` dynamically based on locale if needed
            },
          ]}
        />
        <div>
          <h1 className="text-[#353535] font-[pnu] text-[32px] font-bold leading-[160%]">
            {
              locale == "ar" ? course.name_ar : course?.name_en // Switch to `name_en` dynamically based on locale if needed
            }
          </h1>
          <p className="w-[607px] text-[rgba(33,33,33,0.60)] font-[pnu] mb-6 text-base font-normal leading-[160%]">
            {
              locale == "ar" ? course.description_ar : course?.description_en // Switch to `description_en` dynamically based on locale if needed
            }
          </p>
          <div className="flex gap-4 mb-4 flex-wrap">
            <p className="flex items-center gap-1">
              <Image src={starIcon} alt="star icon" width={20} height={20} />
              <span className="font-bold">4.8</span> (451,444 {t("StarRating")})
            </p>
            <p className="flex items-center gap-1">
              <Image src={clockIcon} alt="clock icon" width={20} height={20} />4{" "}
              {t("WeeksDuration")}
            </p>
            <p className="flex items-center gap-1">
              <Image src={usersIcon} alt="users icon" width={20} height={20} />
              {t("SubscribersCount")} 350
            </p>
            <p className="flex items-center gap-1">
              <Image
                src={notebookIcon}
                alt="notebook icon"
                width={20}
                height={20}
              />
              {t("ArabicLanguage")}
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <p className="text-[color:var(--Neutral-70,#595959)] text-sm font-medium leading-[22px] tracking-[-0.14px]">
              {t("ProvidedBy")}
            </p>
            <p className="text-[#017AFD] text-base font-medium leading-[22px] underline">
              {t("Doctor")}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="-z-20">
        <div className="w-[709px] max-w-full font-[pnu] lg:mb-20 z-30">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default LeftSideCourseComp;
