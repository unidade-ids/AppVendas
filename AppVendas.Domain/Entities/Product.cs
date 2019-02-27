using System;

namespace AppVendas.Domain.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime? Update { get; set; }

        public Product(string name, string description, decimal price)
        {
            this.Name = name;
            this.Description = description;
            this.Price = price;
            this.Update = DateTime.Now;
        }
    }
}
