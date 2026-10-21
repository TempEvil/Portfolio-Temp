import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Flex, Button, Center } from "@chakra-ui/react";
// Icons
import { TiPrinter } from "react-icons/ti";
import { RiContactsBook3Fill } from "react-icons/ri";
// Components
import ResumeLayout from "./components/ResumeLayout";
import { Tooltip } from "@/shared/components/ui/tooltip";
// Config
import { ProfileImage } from "@/app/configs/app";
// Data
import { personal_curriculumn_vitae } from "@/shared/data/ResumeData";

const Resume = () => {
  const printRef = useRef<HTMLDivElement>(null);

  const reactToPrintFn = useReactToPrint({
    contentRef: printRef,
    documentTitle: `${personal_curriculumn_vitae.first_name}${personal_curriculumn_vitae.last_name}`,
  });

  const downloadContact = () => {
    const vcard = `
			BEGIN:VCARD
			VERSION:3.0
			N:${personal_curriculumn_vitae.last_name};${personal_curriculumn_vitae.first_name};;;
			FN:${personal_curriculumn_vitae.first_name}
			LN:${personal_curriculumn_vitae.last_name}
			TEL;TYPE=CELL:+855${
        personal_curriculumn_vitae.telephone.startsWith("0")
          ? personal_curriculumn_vitae.telephone.substring(1).replaceAll(" ", "")
          : personal_curriculumn_vitae.telephone.replaceAll(" ", "")
      }
			EMAIL:${personal_curriculumn_vitae.email}
			TITLE:${personal_curriculumn_vitae.work_experience[0].position}
			// URL:${window.location.href}
			URL:https://sok-sovannarith.vercel.app
			END:VCARD
			`.trim();

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "SokSovannarith.vcf";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <Flex width="100%" justifyContent="start" alignItems="center" direction={{ base: "row", md: "column" }} padding="5" gapY={4}>
      <Tooltip showArrow content="Print" positioning={{ placement: "left" }} openDelay={0} closeDelay={100}>
        <Button
          onClick={reactToPrintFn}
          display={{ base: "none", sm: "block" }}
          className="print-button"
          zIndex="2000"
          bgColor="theme.bg"
          color="theme.text"
          shadow="2xl"
          position="fixed"
          height="3.5rem"
          width="3.5rem"
          borderRadius="50%"
          bottom="80px"
          right="15px"
        >
          <Center>
            <TiPrinter />
          </Center>
        </Button>
      </Tooltip>
      <Tooltip showArrow content="Save contact" positioning={{ placement: "left" }} openDelay={0} closeDelay={100}>
        <Button
          onClick={downloadContact}
          className="contact-button"
          zIndex="2000"
          bgColor="theme.bg"
          color="theme.text"
          shadow="2xl"
          position="fixed"
          height="3.5rem"
          width="3.5rem"
          borderRadius="50%"
          bottom="15px"
          right="15px"
        >
          <Center>
            <RiContactsBook3Fill />
          </Center>
        </Button>
      </Tooltip>
      <ResumeLayout profile={ProfileImage} personalData={personal_curriculumn_vitae} />
      <ResumeLayout printRef={printRef} profile={ProfileImage} personalData={personal_curriculumn_vitae} />
    </Flex>
  );
};

export default Resume;