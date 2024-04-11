
import Image from "next/image";
import { Container } from "react-bootstrap";
import Landing from "@/components/homepage/Landing";
import ProductList from "@/components/homepage/ProductList";
import { LandingSection } from "@/components/styled-components/homepage";
import ContactForm from "@/components/common/ContactForm";

export async function getProductData() {
  const response = await fetch("https://fakestoreapi.com/products", { method: "GET" });

  if (!response.ok) {
    throw new Error('Failed to get product data');
  }

  return response.json();
}

const Home = async () => {
  const products = await getProductData()
  return (
    <>
      <LandingSection>
        <Landing/>
        <ProductList data={products} />
        <ContactForm/>
      </LandingSection>
    </>
  );
}

export default Home;
