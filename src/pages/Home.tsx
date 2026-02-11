import React, { useEffect, useState } from "react";
import assets from "../assets/assets";
import {
  FaArrowRight,
  FaLeaf,
  FaShieldAlt,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import { FaCartShopping, FaUserDoctor } from "react-icons/fa6";
import product from "../lib/productDetails";
import { useNavigate } from "react-router-dom";
import { convertNairaToDollar } from "../utilities/formatterUtility";
import type {
  BenefitCardProps,
  HowItWorksCardProps,
  HowToUseCardProps,
  IngredientCardProps,
} from "../lib/interfaces";
import { GiCottonFlower } from "react-icons/gi";
import { BiSolidZap } from "react-icons/bi";
import { SiHoneygain } from "react-icons/si";
import BenefitCard from "../components/common/BenefitCard";
import HowItWorksCard from "../components/common/HowItWorkCard";
import IngredientCard from "../components/common/IngredientsCard";
import HowToUseCard from "../components/common/HowToUseCard";
import WhyChooseCard from "../components/common/WhyChooseCard";
import FaqCard from "../components/common/FaqCard";

const Home: React.FC = () => {
  const savedCount = sessionStorage.getItem("productCount");
  const [productCount, setProductCount] = useState(
    savedCount ? +savedCount : 1,
  );
  const navigate = useNavigate();
  const [showUSD, setShowUSD] = useState(false);

  const manageProductQuantity = (type = "add") => {
    if (type === "add") {
      setProductCount(productCount + 1);
      return;
    }
    if (productCount === 1) {
      return;
    }
    setProductCount(productCount - 1);
  };

  const benefits: BenefitCardProps[] = [
    {
      name: "Pure, Plant-Based Formula",
      icon: <GiCottonFlower />,
      detail:
        "Made with carefully selected red botanicals and superfruits, no artificial colors, no fillers, and no added sugar. Clean nutrition your body can recognize and use daily.",
    },
    {
      name: "Daily Vitality Boost",
      icon: <BiSolidZap />,
      detail:
        "Designed to support natural energy, mental clarity, and immune strength when taken consistently. Feel refreshed, focused, and ready to take on your day.",
    },
    {
      name: "Quality You Can Trust",
      icon: <SiHoneygain />,
      detail:
        "Formulated with evidence-based nutraceuticals and produced in GMP-certified, FDA-registered facilities using independently tested ingredients.",
    },
  ];

  const howItWorks: HowItWorksCardProps[] = [
    {
      name: "Place Your Order",
      id: "1",
      detail:
        "Choose your preferred package and complete a secure checkout to begin your journey as a member.",
    },
    {
      name: "Receive & Experience",
      id: "2",
      detail:
        "Enjoy fast delivery and start using Double Red Rose daily to support your wellness and track your results.",
    },
    {
      name: "Share & Grow",
      id: "3",
      detail:
        "Recommend Double Red Rose to others, share your referral link confidently, and earn consistent rewards as your network expands and your impact grows.",
    },
  ];

  const ingredients: IngredientCardProps[] = [
    {
      title: "Red Rose Extract",
      description:
        "Rich in phytonutrients and antioxidants that support cellular health and skin vitality.",
      image: assets.rose,
    },
    {
      title: "Goji Berry",
      description:
        "A powerful antioxidant superfruit traditionally used to support immunity and energy.",
      image: assets.goji,
    },
    {
      title: "N-Acetyl Cysteine (NAC)",
      description:
        "Helps support glutathione production, promoting antioxidant defense and cellular protection.",
      image: assets.nac,
    },

    {
      title: "Pomegranate",
      description:
        "Supports healthy aging, skin health, and antioxidant defense.",
      image: assets.pomegranate,
    },
    {
      title: "Red Grapes",
      description:
        "Natural source of resveratrol and polyphenols for cellular protection.",
      image: assets.grape,
    },
    {
      title: "Acerola Cherry",
      description: "Naturally high in vitamin C to support immune function.",
      image: assets.acerola,
    },
    {
      title: "Peach Extract",
      description:
        "Contributes antioxidants and supports hydration and digestion.",
      image: assets.peach,
    },
    {
      title: "Chinese Date (Jujube)",
      description:
        "Traditionally used to support energy, mood balance, and overall vitality.",
      image: assets.jujube,
    },
    {
      title: "Red Ginseng Extract",
      description: "Supports mental clarity, focus, and physical energy.",
      image: assets.ginseng,
    },
    {
      title: "Locust Honey",
      description:
        "Natural sweetener that supports energy and nutrient absorption.",
      image: assets.honey,
    },
    {
      title: "Lemon Extract",
      description: "Supports hydration, digestion, and freshness of taste.",
      image: assets.lemon,
    },
  ];

  const howToUse: HowToUseCardProps[] = [
    {
      step: 1,
      title: "Take Daily as Recommended",
      description:
        "Consume one sachet each day as directed to support consistent nutrient intake and overall wellness.",
    },
    {
      step: 2,
      title: "Stay Consistent",
      description:
        "Daily use allows your body to absorb and respond to key nutrients effectively over time.",
    },
    {
      step: 3,
      title: "Listen to Your Body",
      description:
        "Observe how you feel as you continue use and make adjustments with professional guidance if needed.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <FaLeaf className="text-base" />,
      title: "Premium Quality Ingredients",
      description:
        "Our products are made with carefully selected ingredients to ensure safety, purity, and effectiveness.",
    },
    {
      icon: <FaUserDoctor className="text-base" />,
      title: "Strong Partner Support",
      description:
        "As an affiliate business owner, you get access to guidance, community, and ongoing support.",
    },
    {
      icon: <FaShieldAlt className="text-base" />,
      title: "Trusted Wellness Brand",
      description:
        "Used by partners across multiple regions, Double Red Rose is built on trust and transparency.",
    },
  ];

  const faqs = [
    {
      question: "Is this product safe to use?",
      answer:
        "Yes. Our products are made with carefully sourced ingredients and follow recommended safety standards.",
    },
    {
      question: "Do I need experience to become an affiliate?",
      answer:
        "No experience is required. You’ll receive guidance and support to help you get started.",
    },
    {
      question: "How soon can I see results?",
      answer:
        "Results vary depending on consistency and individual response, but many users notice changes over time.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply reach out to us or follow the sign-up process. We’ll guide you step by step.",
    },
  ];

  useEffect(() => {
    if (productCount > 1) {
      sessionStorage.setItem("productCount", productCount.toString());
    }
  }, [productCount]);

  return (
    <div className="flex flex-col gap-10 lg:gap-14">
      <section className="flex lg:flex-row flex-col gap-6 lg:gap-12 items-start">
        <div className="w-full lg:w-1/2 h-full bg-neutral-soft/30 backdrop-blur-2xl rounded-2xl relative">
          <img
            src={assets.mockup}
            alt="mockup-image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <span className="absolute top-3 right-6 bg-primary text-white rounded-2xl px-3 py-1 text-xs uppercase font-semibold">
            in stock
          </span>
        </div>
        <div className="flex flex-col gap-2 lg:gap-5 w-full lg:w-1/2">
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((_, index) => (
                <FaStar
                  key={index}
                  className="w-2.75 text-primary font-semibold"
                />
              ))}
              <FaStarHalf className="w-2.75 text-primary font-semibold" />
            </div>
            <h4 className="text-neutral-soft text-xs font-medium">
              (4.8/5 from 1,200 + users)
            </h4>
          </div>
          <div className="flex flex-col">
            <h1 className="text-neutral-dark text-2xl lg:text-5xl font-semibold">
              Nourish Your Body.{" "}
            </h1>
            <h1 className="text-primary text-2xl lg:text-5xl font-semibold">
              Elevate Your Lifestyle.{" "}
            </h1>
          </div>
          <div className="w-full">
            <p className="text-neutral-soft font-medium text-xs lg:text-sm">
              Discover a premium wellness supplement crafted to support daily
              vitality, immunity, and mental clarity. Made with carefully
              selected botanicals and superfruits to help you perform at your
              best every single day. Join our growing global community of
              business owners today.
            </p>
          </div>
          <div className="border border-neutral-soft/20 rounded-2xl bg-white shadow flex flex-col gap-3 px-5 py-3 w-full lg:w-[55%] sm:w-1/2">
            <div
              className="flex flex-col gap-1 cursor-pointer"
              onClick={() => setShowUSD((prev) => !prev)}
            >
              <h3 className="text-xl font-semibold text-primary">
                {showUSD
                  ? `$${convertNairaToDollar(product.price * productCount)}`
                  : `₦${(product.price * productCount).toLocaleString()}`}
              </h3>
              <p className="text-xs font-medium text-neutral-soft">
                Free express shipping for orders over &#8358;1,000,000
              </p>
            </div>
            <div className="flex items-center gap-4 w-full lg:justify-between">
              <div className="bg-neutral-soft/10 border border-neutral-soft/10 rounded-lg flex items-center gap-3 px-3 py-2 lg:w-[35%]  justify-between">
                <button
                  className="text-neutral-dark text-sm font-semibold cursor-pointer"
                  onClick={() => manageProductQuantity("deduct")}
                >
                  -
                </button>
                <span className="text-neutral-dark text-sm font-semibold">
                  {productCount}
                </span>
                <button
                  className="text-neutral-dark text-sm font-semibold cursor-pointer"
                  onClick={() => manageProductQuantity()}
                >
                  +
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => navigate("/purchase-product")}
                  className="flex items-center gap-2 bg-primary text-white font-semibold text-sm rounded-lg px-3 py-2 cursor-pointer"
                >
                  <FaCartShopping size={15} />
                  Buy Now
                  <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 lg:gap-12">
        <div className="w-full flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-t-xl rounded-b-xl"></div>
          <h2 className="text-xl lg:text-2xl  text-neutral-dark font-semibold">
            Key Benefits
          </h2>
        </div>
        <div className="flex lg:items-center gap-5 lg:flex-row flex-col">
          {benefits.map((benefit, index) => (
            <BenefitCard
              name={benefit.name}
              icon={benefit.icon}
              detail={benefit.detail}
              key={index}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6 lg:gap-12">
        <div className="w-full flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-t-xl rounded-b-xl"></div>
          <h2 className="text-xl lg:text-2xl  text-neutral-dark font-semibold">
            How It Works
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-7 lg:place-items-center">
          {howItWorks.map((h) => (
            <HowItWorksCard
              key={h.id}
              name={h.name}
              id={h.id}
              detail={h.detail}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6 lg:gap-12">
        <div className="w-full flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-t-xl rounded-b-xl"></div>
          <h2 className="text-xl lg:text-2xl  text-neutral-dark font-semibold">
            Premium Ingredients
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {ingredients.map((ingredient, index) => (
            <IngredientCard
              key={index}
              title={ingredient.title}
              image={ingredient.image}
              description={ingredient.description}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6 lg:gap-12">
        <div className="w-full flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-t-xl rounded-b-xl"></div>
          <h2 className="text-xl lg:text-2xl  text-neutral-dark font-semibold">
            How To Use
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {howToUse.map((item) => (
            <HowToUseCard
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6 lg:gap-12">
        <div className="w-full flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-t-xl rounded-b-xl"></div>
          <h2 className="text-xl lg:text-2xl  text-neutral-dark font-semibold">
            Why Choose us
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <WhyChooseCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6 lg:gap-12">
        <div className="w-full flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-t-xl rounded-b-xl"></div>
          <h2 className="text-xl lg:text-2xl  text-neutral-dark font-semibold">
            FAQs
          </h2>
        </div>
        <div className="w-full mx-auto flex flex-col gap-3">
          {faqs.map((faq) => (
            <FaqCard
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
