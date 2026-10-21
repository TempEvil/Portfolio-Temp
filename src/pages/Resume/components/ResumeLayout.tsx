/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  Link,
  Text,
  Icon,
  Flex,
  List,
  Image,
  VStack,
  HStack,
  Timeline,
  Progress,
  Separator,
  SimpleGrid,
} from "@chakra-ui/react";
// Component
import { Tooltip } from "@/shared/components/ui/tooltip";
// Icons
import { MdPhone } from "react-icons/md";
import { IoIosPin, IoIosMail, IoIosArrowBack } from "react-icons/io";
// Util
import { determinedProficiency } from "@/shared/utils/determinedProficiency";
// Types
import type { education, nameValue, public_link, work_experience } from "@/shared/types/ResumeDataType";

const ResumeLayout = ({ personalData, printRef, profile }: any) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Flex
      ref={printRef ? printRef : null}
      display={printRef ? "none" : "flex"}
      className={printRef ? "a4-print" : "a4-paper"}
      direction={!printRef ? { base: "column", md: "row" } : "row"}
      bgColor="theme.bg"
      minWidth={!printRef ? { base: "100%", md: "210mm" } : "210mm"}
      minHeight="297mm"
      height="297mm"
      borderRadius="md"
      boxShadow={printRef ? "sm" : "2xl"}
      border={printRef ? "1px solid" : "none"}
      borderColor="theme.border"
    >
      {/* Left Section */}
      <VStack
        className="info"
        width={!printRef ? { base: "100%", md: "70mm" } : "70mm"}
        bgColor="theme.resumeBg"
        padding="5"
        gap={1}
        roundedTop={printRef ? "none" : { base: "md", md: "none" }}
        position="relative"
      >
        {/* Navigate Back */}
        <Flex
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="0.5rem"
          left="0.5rem"
          zIndex={9999}
          boxSize="30px"
          fontSize="1.25rem"
          color="theme.resumeText"
          cursor="pointer"
          rounded="full"
          display={printRef ? "none" : "flex"}
          _hover={{ bgColor: "theme.bgHover", color: "theme.text" }}
          _active={{ bgColor: "theme.bgHover", color: "theme.text" }}
          transition="all 0.15s"
          onClick={() => navigate("/")}
        >
          <IoIosArrowBack />
        </Flex>
        {/* Profile Image */}
        <Image
          height="40mm"
          aspectRatio="square"
          src={profile}
          borderWidth="4px"
          borderStyle="solid"
          borderColor="theme.resumeText"
          borderRadius="50%"
          marginTop="2"
          boxShadow="lg"
          objectFit="cover"
        />
        {/* About Me */}
        <VStack width="100%" align="start" marginTop="3">
          <Text color="theme.resumeText">{t("ABOUT ME")}</Text>
          <Text color="theme.resumeText" fontSize="xs">
            {t(personalData.about_me)}
          </Text>
        </VStack>
        <Separator width="100%" variant="solid" />
        {/* Links */}
        {personalData.public_link.length > 0 && (
          <VStack width="100%" align="start" marginTop="3" paddingRight={5}>
            <Text color="theme.resumeText">{t("LINKS")}</Text>
            <List.Root marginLeft="5">
              {personalData.public_link.map((link: public_link, idx: number) => (
                <List.Item key={idx}>
                  <Tooltip content={link.url} positioning={{ placement: "right" }} openDelay={0} closeDelay={100}>
                    <Link
                      color="theme.resumeText"
                      fontSize={printRef ? "xs" : "sm"}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {printRef ? link.url : link.name}
                    </Link>
                  </Tooltip>
                </List.Item>
              ))}
            </List.Root>
          </VStack>
        )}
        <Separator width="100%" variant="solid" />
        {/* Hobbies */}
        {personalData.hobbies.length > 0 && (
          <VStack width="100%" align="start" marginTop="3" paddingRight={5}>
            <Text color="theme.resumeText">{t("HOBBIES")}</Text>
            <List.Root marginLeft="5">
              {personalData.hobbies.map((hobby: string, idx: number) => (
                <List.Item key={idx}>
                  <Text color="theme.resumeText" fontSize="sm">
                    {t(hobby)}
                  </Text>
                </List.Item>
              ))}
            </List.Root>
          </VStack>
        )}
        <Separator width="100%" variant="solid" />
        {/* Languages */}
        {personalData.languages.length > 0 && (
          <VStack width="100%" align="start" marginTop="3" paddingRight={5}>
            <Text color="theme.resumeText">{t("LANGUAGES")}</Text>
            <List.Root width="100%" marginLeft="5">
              {personalData.languages.map((language: nameValue, idx: number) => (
                <List.Item key={idx}>
                  <HStack width="100%" justifyContent="space-between">
                    <Text color="theme.resumeText" fontSize="sm">
                      {t(language.name)}
                    </Text>
                    <Tooltip
                      content={`${language.value}%`}
                      positioning={{ placement: "left" }}
                      openDelay={0}
                      closeDelay={100}
                    >
                      <Text color="theme.resumeText" fontSize="sm">
                        {t(determinedProficiency(language.value))}
                      </Text>
                    </Tooltip>
                  </HStack>
                </List.Item>
              ))}
            </List.Root>
          </VStack>
        )}
        <Separator width="100%" variant="solid" />
        {/* Reference */}
        <VStack width="100%" align="start" marginTop="3" paddingRight={5}>
          <Text color="theme.resumeText">{t("REFERENCE")}</Text>
          {personalData.references.length > 0 ? (
            <Text></Text>
          ) : (
            <Text color="theme.resumeText" fontSize="sm">
              {t("Available if needed.")}
            </Text>
          )}
        </VStack>
      </VStack>
      {/* Right Section */}
      <VStack
        className="detail"
        width={!printRef ? { base: "100%", md: "140mm" } : "140mm"}
        padding="5"
        gap={0}
        bgColor="theme.bg"
        color="theme.text"
        roundedBottom={printRef ? "none" : { base: "md", md: "none" }}
      >
        {/* Personal Detail */}
        <HStack
          flexDirection={!printRef ? { base: "column", md: "row" } : "row"}
          width="100%"
          alignContent="space-between"
          marginTop={!printRef ? { base: 0, md: 2 } : 2}
        >
          <VStack flex="1.5" width="100%" alignItems="start" gap="0">
            <Text fontFamily="heading" fontSize="2xl">
              {t(personalData.first_name.toUpperCase())}
            </Text>
            <Text fontFamily="heading" fontSize="2xl">
              {t(personalData.last_name.toUpperCase())}
            </Text>
            <Text color="theme.textSubtle" fontSize="sm">
              {t(personalData.work_experience[0].position)}
            </Text>
          </VStack>
          <VStack
            flex="1"
            width="100%"
            height="100%"
            alignItems="flex-start"
            gap="0"
            marginTop={!printRef ? { base: 0, md: 3 } : 3}
          >
            <HStack alignItems="start">
              <Icon marginTop={1} color="theme.textSubtle">
                <IoIosPin size={15} />
              </Icon>
              <Text fontSize="sm">{t(personalData.address)}</Text>
            </HStack>
            <HStack>
              <Icon color="theme.textSubtle">
                <MdPhone size={15} />
              </Icon>
              <Tooltip content="Contact me" positioning={{ placement: "bottom" }} openDelay={0} closeDelay={100}>
                <Link
                  fontSize="sm"
                  href={`tel:+855${personalData.telephone.startsWith("0") ? personalData.telephone.substring(1).replaceAll(" ", "") : personalData.telephone.replaceAll(" ", "")}`}
                >
                  {personalData.telephone}
                </Link>
              </Tooltip>
            </HStack>
            <HStack>
              <Icon color="theme.textSubtle">
                <IoIosMail size={15} />
              </Icon>
              <Tooltip content="Send Email" positioning={{ placement: "bottom" }} openDelay={0} closeDelay={100}>
                <Link fontSize="sm" href={`mailto:${personalData.email}`}>
                  {personalData.email}
                </Link>
              </Tooltip>
            </HStack>
          </VStack>
        </HStack>
        {/* Work Experience */}
        {personalData.work_experience.length > 0 && (
          <VStack width="100%" alignItems="start" marginTop={1} gap={1}>
            <Text fontSize="sm" fontWeight={"semibold"}>
              {t("WORK EXPERIENCE")}
            </Text>
            <Separator width="100%" variant="solid" />
            <Timeline.Root size="md">
              {personalData.work_experience.map((experience: work_experience, index: number) => (
                <Timeline.Item key={index}>
                  <Timeline.Connector>
                    <Timeline.Separator marginTop="1rem" />
                    <Timeline.Indicator scale={0.5}></Timeline.Indicator>
                  </Timeline.Connector>
                  <Timeline.Content width="auto" gap={0} paddingBottom={"3px"}>
                    <Timeline.Title>{t(experience.position)}</Timeline.Title>
                    <Timeline.Description>
                      {t(experience.company)} | {t(experience.duration)}
                    </Timeline.Description>
                    {experience.responsibility.length > 0 && (
                      <List.Root marginLeft="4">
                        {experience.responsibility.map((responsible, idx) => (
                          <List.Item key={`${index}-${idx}`}>
                            <Text fontSize="xs">{t(responsible)}</Text>
                          </List.Item>
                        ))}
                      </List.Root>
                    )}
                  </Timeline.Content>
                </Timeline.Item>
              ))}
            </Timeline.Root>
          </VStack>
        )}
        {/* Training */}
        {personalData.training.length > 0 && (
          <VStack width="100%" alignItems="start" gap={1}>
            <Text fontSize="sm" fontWeight={"semibold"}>
              {t("TRAINING")}
            </Text>
            <Separator width="100%" variant="solid" />
            <Timeline.Root size="md">
              {personalData.training.map((education: education, idx: number) => (
                <Timeline.Item key={idx}>
                  <Timeline.Connector>
                    <Timeline.Separator marginTop="1rem" />
                    <Timeline.Indicator scale={0.5}></Timeline.Indicator>
                  </Timeline.Connector>
                  <Timeline.Content width="auto" gap={0} paddingBottom={"5px"}>
                    <Timeline.Title>{t(education.degree)}</Timeline.Title>
                    <Timeline.Description>
                      {t(education.school)} | {t(education.duration)}
                    </Timeline.Description>
                  </Timeline.Content>
                </Timeline.Item>
              ))}
            </Timeline.Root>
          </VStack>
        )}
        {/* Education */}
        {personalData.education.length > 0 && (
          <VStack width="100%" alignItems="start" gap={1}>
            <Text fontSize="sm" fontWeight={"semibold"}>
              {t("EDUCATION")}
            </Text>
            <Separator width="100%" variant="solid" />
            <Timeline.Root size="md">
              {personalData.education.map((education: education, idx: number) => (
                <Timeline.Item key={idx}>
                  <Timeline.Connector>
                    <Timeline.Separator marginTop="1rem" />
                    <Timeline.Indicator scale={0.5}></Timeline.Indicator>
                  </Timeline.Connector>
                  <Timeline.Content width="auto" gap={0} paddingBottom={"5px"}>
                    <Timeline.Title>{t(education.degree)}</Timeline.Title>
                    <Timeline.Description>
                      {t(education.school)} | {t(education.duration)}
                    </Timeline.Description>
                  </Timeline.Content>
                </Timeline.Item>
              ))}
            </Timeline.Root>
          </VStack>
        )}
        {/* Technical Skills */}
        {personalData.technical_skills.length > 0 && (
          <VStack width="100%" alignItems="start">
            <Text fontSize="sm" fontWeight="semibold">
              {t("TECHNICAL SKILLS")}
            </Text>
            <Separator width="100%" variant="solid" />
            <SimpleGrid width="100%" columns={!printRef ? { base: 1, md: 2 } : 2} gapX={4} gapY={0.5}>
              {personalData.technical_skills.map((skill: nameValue, idx: number) => (
                <Progress.Root
                  key={idx}
                  min={0}
                  max={100}
                  value={skill.value}
                  animated
                  colorPalette="success"
                  variant="outline"
                  size="sm"
                  shape="rounded"
                >
                  <Progress.Label fontSize={"12px"}>{skill.name}</Progress.Label>
                  <HStack>
                    <Progress.Track flex="1">
                      <Progress.Range />
                    </Progress.Track>
                    <Progress.ValueText>{skill.value}%</Progress.ValueText>
                  </HStack>
                </Progress.Root>
              ))}
            </SimpleGrid>
          </VStack>
        )}
        {/* Soft Skills */}
        {personalData.soft_skils.length > 0 && (
          <VStack width="100%" alignItems="start" marginTop={1}>
            <Text fontSize="sm" fontWeight="semibold">
              {t("SOFT SKILLS")}
            </Text>
            <Separator width="100%" variant="solid" />
            <SimpleGrid width="100%" columns={!printRef ? { base: 1, md: 2 } : 2} gapX={4} gapY={0.5}>
              {personalData.soft_skils.map((skill: nameValue, idx: number) => (
                <Progress.Root
                  key={idx}
                  min={0}
                  max={100}
                  value={skill.value}
                  colorPalette="success"
                  variant="outline"
                  size="sm"
                  shape="rounded"
                >
                  <Progress.Label>{t(skill.name)}</Progress.Label>
                  <HStack>
                    <Progress.Track flex="1">
                      <Progress.Range />
                    </Progress.Track>
                    <Progress.ValueText>{skill.value}%</Progress.ValueText>
                  </HStack>
                </Progress.Root>
              ))}
            </SimpleGrid>
          </VStack>
        )}
      </VStack>
    </Flex>
  );
};

export default ResumeLayout;
