using System;

namespace AppVendas.Domain.Entities
{
    public class Product
    {
        public int Id { get; private set; }
        public string Name { get; private set; }
        public string Description { get; private set; }
        public decimal Price { get; private set; }
        public DateTime? Update { get; private set; }

        public Product(string name, string description, decimal price, DateTime? update)
        {
            this.Name = name;
            this.Description = description;
            this.Price = price;
            this.Update = update;
        }
    }
}
