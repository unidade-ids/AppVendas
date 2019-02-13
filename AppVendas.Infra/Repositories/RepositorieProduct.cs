using System.Collections.Generic;
using System.Linq;
using AppVendas.Domain.Entities;
using AppVendas.Domain.Repositories;
using AppVendas.Infra.Context;
using Microsoft.EntityFrameworkCore;

namespace AppVendas.Infra.Repositories
{
    public class RepositoryProduct : IRepositoryProduct
    {
        private readonly AppVendasContext _context;

        public RepositoryProduct(AppVendasContext context)
        {
            _context = context;
        }

        public void Add(Product product)
        {
            _context.Products.Add(product);
        }

        public void Delete(int id)
        {
            var product = GetById(id);

            _context.Products.Remove(product);
        }

        public ICollection<Product> GetAll()
        {
            return _context.Products.ToList();
        }

        public Product GetById(int id)
        {
            return _context.Products.Find(id);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(Product product)
        {
            _context.Entry(product).State = EntityState.Modified;
        }
    }
}
