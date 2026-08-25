import React from "react";
import { useParams } from "react-router-dom";
import { Layers } from "lucide-react";
import useLanguage from "@/hooks/useLanguage";
import { brandProductsData } from "@/data/brands/brandProductsData";

const BrandProductDetailsTable = () => {
  const {
    brandSlug,
    categorySlug,
    productSlug,
    subcategorySlug,
  } = useParams();
  const { brandProductsText } = useLanguage();
  const pageContent = brandProductsText;
  const productData =
    subcategorySlug
      ? brandProductsData?.[brandSlug]?.[
      categorySlug
      ]?.[subcategorySlug]?.[
      productSlug
      ]
      : brandProductsData?.[brandSlug]?.[
      categorySlug
      ]?.[
      productSlug
      ];
  const specifications =
    productData?.specifications || [];
  if (
    !pageContent ||
    specifications.length === 0
  ) {
    return null;
  }
  const columnKeys =
    productData?.columns || [];
  const columns = columnKeys.map((key) => ({
    key,
    label:
      pageContent.columns?.[key] || key,
  }));
  return (
    <section className="detailsTable-wrapper section">
      <div className="container">
        <div className="detailsTable-heading section-heading text-center">
          <span
            className="category-tag"
            style={{
              color:
                "rgba(245,241,236,0.65)",
              fontWeight: 600,
            }}
          >
            {
              pageContent.specificationsTag
            }
          </span>
          <h2 className="heading mb-2 light-heading">
            {
              pageContent.specificationsTitle
            }
          </h2>
        </div>
        <div className="detailsTable-card">
          <div className="detailsTable-header">
            <div className="detailsTable-badge">
              <Layers
                size={16}
                strokeWidth={1.5}
              />
              {specifications.length}{" "}
              {
                pageContent.variantsLabel
              }
            </div>
          </div>
          <div className="detailsTable-tableWrapper">
            <table className="detailsTable-table">
              <thead>
                <tr>
                  {columns.map(
                    (column) => (
                      <th
                        key={
                          column.key
                        }
                      >
                        {
                          column.label
                        }
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {specifications.map(
                  (
                    row,
                    index
                  ) => (
                    <tr
                      key={
                        index
                      }
                    >
                      {columns.map(
                        (
                          column
                        ) => (
                          <td
                            key={
                              column.key
                            }
                          >
                            {
                              row[
                              column
                                .key
                              ]
                            }
                          </td>
                        )
                      )}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandProductDetailsTable;