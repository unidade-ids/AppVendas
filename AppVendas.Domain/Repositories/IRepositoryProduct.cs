using AppVendas.Domain.Entities;
using System.Collections.Generic;

namespace AppVendas.Domain.Repositories
{
    public interface IRepositoryProduct
    {
        Product GetById(int id);
        ICollection<Product> GetAll();
        void Add(Product product);
        void Update(Product product);
        void Delete(int id);
        void Save();
    }
}
