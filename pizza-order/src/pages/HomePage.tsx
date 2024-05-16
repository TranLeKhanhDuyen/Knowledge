import { useEffect, useMemo, useRef, useState } from "react";
import CardItem from "../sections/CardItem";
import { Product } from "../models/product.model";
import ButtonField from "../components/ButtonField";
import TextField from "../components/TextField";
import LoadingLayout from "../layouts/LoadingLayout";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>("");
  const searchRef = useRef<any>(null);

  const handleShowMore = () => {
    setIsLoading(true);
    const nextPage = page + 1;
    const newProducts = products.slice(0, nextPage * 3);
    setDisplayedProducts(newProducts);
    setPage(nextPage);
    setIsLoading(false);
  };

  const handleSearchText = (value: string) => {
    clearTimeout(searchRef.current!);
    searchRef.current = setTimeout(() => {
      setSearchText(value);
    }, 1000);
  };

  const searchValue = useMemo(() => {
    return products.filter(
      (item) =>
        item.productName?.toUpperCase().indexOf(searchText.toUpperCase()) !== -1
    );
  }, [searchText]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setProducts(data);
          setDisplayedProducts(data.slice(0, 3));
          setIsLoading(false);
        }, 2000);
      });
  }, []);

  return (
    <LoadingLayout loading={!products.length}>
      <div>
        <TextField
          placeholder="Search..."
          width="50%"
          onChange={handleSearchText}
        />
        <div className="wrapper-card-items">
          {(searchText ? searchValue : displayedProducts || []).map(
            (item, index) => (
              <CardItem
                key={index}
                id={item.id}
                productName={item.productName}
                description={item.description}
              />
            )
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {displayedProducts.length < products.length && (
              <ButtonField loading={isLoading} onClick={handleShowMore}>
                Show More
              </ButtonField>
            )}
          </div>
        </div>
      </div>
    </LoadingLayout>
  );
};

export default HomePage;
