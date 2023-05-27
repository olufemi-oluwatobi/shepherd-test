import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const isMobileDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (window) {
      console.log("in here");
      const userAgent = window.navigator.userAgent;
      setIsMobile(/Mobi|Android/i.test(userAgent));
    }
  }, [router.pathname]);

  return isMobile;
};

export default isMobileDevice;
