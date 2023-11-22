import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  
  

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'General questions',
      comment: '',
    },

    onSubmit: async (values) => {
      await submit('/submit-form', values);
      
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      type: Yup.string().required('Enquiry type is required'),
      comment: Yup.string().required('Message is required'),
    }),
    
  });

  useEffect(() => {
    if (response) {
      const { type, message } = response;
      if (type === 'success') {
        onOpen('success', message);
        formik.resetForm();
      }
      else if (type === 'error') {
        onOpen('error', message);
      }
    }
  }, [response, formik, onOpen]);
  

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
            <FormControl isInvalid={formik.touched.firstName && Boolean(formik.errors.firstName)}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={formik.touched.email && Boolean(formik.errors.email)}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={formik.touched.type && Boolean(formik.errors.type)}>
              <FormLabel htmlFor="type">Type of enquiry</FormLabel>
              <Select
                id="type"
                name="type"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.type}
              >
                {/* options */}
              </Select>
              {formik.touched.type && formik.errors.type && (
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={formik.touched.comment && Boolean(formik.errors.comment)}>
              <FormLabel htmlFor="message">Your message</FormLabel>
              <Textarea
                id="comment"
                name="comment"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.comment}
              />
              {formik.touched.comment && formik.errors.comment && (
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              )}
            </FormControl>

            <Button
              type="submit"
              colorScheme="purple"
              width="full"
              isLoading={isLoading}
              // onClick={formik.handleSubmit}
            >
              Submit
            </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
