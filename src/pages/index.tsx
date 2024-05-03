import { Blog } from "@/components/Blog";
import Image from "next/image";
export default function Page() {
  return (
    <Blog
      t1={
        <Image
          src="/Pantallazo 02-05-2024 17.28.39.png"
          width={854}
          height={527}
          alt="blog"
          className="lg:h-48 md:h-36 w-full object-cover object-center"
        />
      }
      t2="CATEGORY"
      t3="The Catalyzer"
      t4="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
      t6="Learn More"
      t7="1.2K"
      t8="6"
      t9={
        <Image
          src="/721x401"
          width={721}
          height={401}
          alt="blog"
          className="lg:h-48 md:h-36 w-full object-cover object-center"
        />
      }
      t10="CATEGORY"
      t11="The 400 Blows"
      t12="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
      t14="Learn More"
      t15="1.2K"
      t16="6"
      t17={
        <Image
          src="/722x402"
          width={722}
          height={402}
          alt="blog"
          className="lg:h-48 md:h-36 w-full object-cover object-center"
        />
      }
      t18="CATEGORY"
      t19="Shooting Stars"
      t20="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
      t22="Learn More"
      t23="1.2K"
      t24="6"
    />
  );
}
