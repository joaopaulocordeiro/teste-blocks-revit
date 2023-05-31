import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Card } from "./components/Card";
import { HeaderHome } from "./components/HeaderHome";
import { CardGridContainer, HomeContainer } from "./styles";

export interface Family {
  id: number;
  details: {
    description: string;
    name: string;
  };
  premium: boolean;
}

const API_URL = "http://localhost:8080/families";
const TAKE = 10;

export function Home() {
  const [families, setFamilies] = useState<Family[]>([]);
  console.log("fam", families)
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isObserving, setIsObserving] = useState<boolean>(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    const unsubscribe = observeLoader();
    return () => {
      unsubscribe();
    };
  }, [families]);

  const fetchData = async (): Promise<void> => {
    const skip = currentPage * TAKE;
    try {
      setIsLoading(true);
      const response = await axios.get<Family[]>(
        `${API_URL}?skip=${skip}&take=${TAKE}`
      );
  
      if (families.length > 0) {
        const lastLoadedId = families[families.length - 1].id;
        const newFamilies = response.data.filter(
          (family) => family.id > lastLoadedId
        );
        setFamilies((prevFamilies) => [...prevFamilies, ...newFamilies]);
      } else {
        setFamilies(response.data);
      }
  
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const observeLoader = (): (() => void) => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isLoading && !isObserving) {
        setIsObserving(true);
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  };

  useEffect(() => {
    if (!isLoading) {
      setIsObserving(false);
    }
  }, [isLoading]);

  return (
    <>
      <HeaderHome />
      <HomeContainer>
        <p>Resultados</p>
        <CardGridContainer>
          {families.map((item) => (
            <div key={item.id} >
              <Card family={item}/>
            </div>
          ))}
        </CardGridContainer>
        {isLoading && <div>Loading...</div>}
        <div ref={loaderRef}></div>
      </HomeContainer>
    </>
  );
}