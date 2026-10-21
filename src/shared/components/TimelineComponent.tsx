import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Flex, List, Separator, Text, Timeline } from "@chakra-ui/react";

// Define a generic interface for the data structure
interface TimelineItemData {
  title: string;
  role: string;
  date: string;
  description?: string[]; // Made optional for Education
}

interface TimelineComponentProps {
  data: TimelineItemData[];
}

const TimelineComponent = ({ data }: TimelineComponentProps) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <Timeline.Root variant="outline" size="sm" width="full">
      {data.map((item, index) => {
        const isSelected = activeIndex === index;
        return (
          <Timeline.Item key={index} onClick={() => setActiveIndex(index)} cursor="pointer">
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator
                cursor="pointer"
                bgColor={isSelected ? "theme.text" : "theme.bg"}
                border="1px solid"
                borderColor={isSelected ? "theme.border" : "theme.borderStrong"}
                transition="all 0.2s ease-in-out"
                _hover={{
                  transform: "scale(1.2)",
                  borderColor: "theme.border",
                }}
              />
            </Timeline.Connector>

            <Timeline.Content gap="0.15rem" paddingBottom="1rem" opacity={activeIndex !== null && !isSelected ? 0.5 : 1} filter={activeIndex !== null && !isSelected ? "grayscale(100%)" : "none"} transition="all 0.3s">
              <Timeline.Title>
                <Text fontWeight="semibold" fontSize="md">
                  {(item.description?.length ?? 0) > 0 ? t(item.role) : t(item.title)}
                </Text>
              </Timeline.Title>
              <Timeline.Description fontWeight="medium" color={isSelected ? "theme.text" : "theme.textMuted"}>
                <Flex alignItems="center" flexWrap="wrap" gap="0.25rem">
                  <Text>{(item.description?.length ?? 0) > 0 ? t(item.title) : t(item.role)}</Text>
                  {item.date && <Separator orientation="vertical" height="3" variant="solid" />}
                  <Text>{t(item.date)}</Text>
                </Flex>
              </Timeline.Description>

              {/* Only render List if description exists and has items */}
              {item.description && item.description.length > 0 && (
                <List.Root listStylePosition="inside" marginTop="0.25rem" gap="0.15rem">
                  {item.description.map((desc, idx) => (
                    <List.Item fontSize="sm" key={idx} color="theme.text">
                      {t(desc)}
                    </List.Item>
                  ))}
                </List.Root>
              )}
            </Timeline.Content>
          </Timeline.Item>
        );
      })}
    </Timeline.Root>
  );
};

export default TimelineComponent;
