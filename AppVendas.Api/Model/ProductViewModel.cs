using AppVendas.Domain.Entities;
using System;

namespace AppVendas.Api.Model
{
    public class ProductViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime? Update { get; set; }
    }
}
