-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "product_type" TEXT,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category_fields" (
    "id" SERIAL NOT NULL,
    "typeid" INTEGER,
    "field_name" TEXT,
    "field_type" TEXT,

    CONSTRAINT "category_fields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "field_data" (
    "id" SERIAL NOT NULL,
    "fieldid" INTEGER,
    "productid" INTEGER,
    "field_value" TEXT,

    CONSTRAINT "field_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "product_name" TEXT,
    "categoryid" INTEGER,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "category_fields" ADD CONSTRAINT "category_fields_typeid_fkey" FOREIGN KEY ("typeid") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "field_data" ADD CONSTRAINT "field_data_fieldid_fkey" FOREIGN KEY ("fieldid") REFERENCES "category_fields"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "field_data" ADD CONSTRAINT "field_data_productid_fkey" FOREIGN KEY ("productid") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryid_fkey" FOREIGN KEY ("categoryid") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
