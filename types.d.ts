interface ErrorPageProps {
  error: Error;
  /* reset es un método que ya implementa y que ofrece Next.js en los
  archivos de error y permite que si algo falla podamos hacer
  un nuevo intento de montar el componente y eso hace que se vuelva a 
  realizar la petición que falló dado a que esa petición está invocada dentro del
  componente: */
  reset: () => void;
}

type ProductType = {
  description: string;
  gqlId: string;
  handle: string;
  id: string;
  image: string;
  price: number;
  quantity: number;
  tags: string;
  title: string;
}

interface GetProductsResponse {
  products: ProductType[];
}

interface Product {
  id:                   number;
  title:                string;
  body_html:            string;
  vendor:               Vendor;
  product_type:         string;
  created_at:           string;
  handle:               string;
  updated_at:           string;
  published_at:         string;
  template_suffix:      null;
  published_scope:      PublishedScope;
  tags:                 string;
  status:               Status;
  admin_graphql_api_id: string;
  variants:             Variant[];
  options:              Option[];
  images:               Image[];
  image:                Image;
}

interface Image {
  id:                   number;
  alt:                  null;
  position:             number;
  product_id:           number;
  created_at:           string;
  updated_at:           string;
  admin_graphql_api_id: string;
  width:                number;
  height:               number;
  src:                  string;
  variant_ids:          any[];
}

interface Option {
  id:         number;
  product_id: number;
  name:       Name;
  position:   number;
  values:     Option1[];
}

enum Name {
  Title = "Title",
}

enum Option1 {
  DefaultTitle = "Default Title",
}

enum PublishedScope {
  Global = "global",
}

enum Status {
  Active = "active",
}

interface Variant {
  id:                     number;
  product_id:             number;
  title:                  Option1;
  price:                  string;
  sku:                    null;
  position:               number;
  inventory_policy:       InventoryPolicy;
  compare_at_price:       null | string;
  fulfillment_service:    FulfillmentService;
  inventory_management:   null;
  option1:                Option1;
  option2:                null;
  option3:                null;
  created_at:             string;
  updated_at:             string;
  taxable:                boolean;
  barcode:                null;
  grams:                  number;
  image_id:               null;
  weight:                 number;
  weight_unit:            WeightUnit;
  inventory_item_id:      number;
  inventory_quantity:     number;
  old_inventory_quantity: number;
  requires_shipping:      boolean;
  admin_graphql_api_id:   string;
}

enum FulfillmentService {
  Manual = "manual",
}

enum InventoryPolicy {
  Deny = "deny",
}

enum WeightUnit {
  Kg = "kg",
}

enum Vendor {
  FutureWorld = "Future World",
}

// Generated by https://quicktype.io

interface Collection {
  id:                   number;
  handle:               string;
  title:                string;
  updated_at:           string;
  body_html:            string;
  published_at:         string;
  sort_order:           string;
  template_suffix:      string;
  disjunctive:          boolean;
  rules:                Rule[];
  published_scope:      string;
  admin_graphql_api_id: string;
}

interface Rule {
  column:    string;
  relation:  string;
  condition: string;
}

type CartItem = {
  title: string;
  price: number;
  quantity: number;
  id: string;
}