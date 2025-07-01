import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
      <VStack bg="white"
      w="100%"         
      h="100%"
      borderRadius="md"   
      align="start"     
      spacing={3}>
      <Image rounded="md"  src={imageSrc}></Image>
                <Heading color="black" size="sm" p="0 10px">{title}</Heading>
        <Text color="black" fontSize="xs" fontWeight={300} opacity={0.5}  p="0 10px">{description}</Text>
        <Text fontSize="xs" color="black"  p="0 10px">See more <FontAwesomeIcon icon={faArrowRight} size="1x" p="5px" /></Text>
       </VStack>
    </HStack>
  );
};

export default Card;
