import Image from "next/image";
// import { useStore } from "../../../store/store";

export default function Whatsapp() {
  // const { whatsapp } = useStore(({ whatsapp }) => ({ whatsapp }));

  return (
    <>
      {/* {whatsapp ? ( */}
        <div
          id="whatsapp"
          className="block fixed w-16 h-16 right-2 bottom-2.5 z-10"
        >
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=56994092777"
              target="_SEJ"
              rel="noreferrer"
            >
              <Image
                src="/img/whatsappLogoWhite.png"
                priority
                alt="..."
                width="50px"
                height="50px"
              />
            </a>
          </div>
        </div>
      {/* ) : null} */}
    </>
  );
}
