classDiagram
    namespace product {
        class ProductController {
            -ProductService productService
            +GET findAll()
            +GET findOne(id: number)
            +POST create(createProductDto: CreateProductDto)
        }
        
        class ProductService {
            <<service>>
            -Product[] products
            +loadProductsFromDataset()
            +findAll() Product[]
            +findOne(id: number) Product
            +create(createProductDto: CreateProductDto) Product
        }
        
        class Product {
            <<interface>>
            +number id
            +string name
            +number price
            +number stock
            +string description
        }
        
        class CreateProductDto {
            +string name
            +number price
            +number stock
            +string description
        }
    }
    
    namespace purchase {
        class PurchaseController {
            -PurchaseService purchaseService
            -ProductService productService
            +GET findAll()
            +GET findOne(id: number)
            +PATCH update(id: number, updatePurchaseDto: UpdatePurchaseDto)
            +DELETE remove(id: number)
            +GET getTotal(id: number)
            +GET getSummary()
            +GET getTopProducts(limit: number)
        }
        
        class PurchaseService {
            <<service>>
            -Purchase[] purchases
            -ProductService productService
            +loadPurchasesFromDataset()
            +findAll() Purchase[]
            +findOne(id: number) Purchase
            +update(id: number, updatePurchaseDto: UpdatePurchaseDto) Purchase
            +remove(id: number) void
            +calculateTotal(id: number) number
            +getSummary() SummaryDto
            +getSalesReport() SalesReportDto[]
            +getTopProducts(limit: number) TopProductDto[]
        }
        
        class Purchase {
            <<interface>>
            +number id
            +string customerName
            +Date purchaseDate
            +PurchaseItem[] items
            +number totalPrice
        }
        
        class PurchaseItem {
            <<interface>>
            +number productId
            +number quantity
            +number price
        }
        
        class UpdatePurchaseDto {
            +string customerName
            +Date purchaseDate
            +PurchaseItemDto[] items
        }
        
        class PurchaseItemDto {
            +number productId
            +number quantity
        }
    }
    
    ProductController ..> ProductService : uses
    PurchaseController ..> PurchaseService : uses
    PurchaseController ..> ProductService : uses
    ProductService --> Product : manages
    ProductService ..> CreateProductDto : uses
    PurchaseService --> Purchase : manages
    PurchaseService ..> ProductService : uses
    PurchaseService ..> UpdatePurchaseDto : uses
    UpdatePurchaseDto *-- PurchaseItemDto : contains
    Purchase *-- PurchaseItem : contains
    PurchaseItem --> Product : references