import useLanguage from "@/hooks/useLanguage";

const NotFound = () => {
  const { notFound } = useLanguage();
  return <h1>{notFound.title}</h1>;
};

export default NotFound;