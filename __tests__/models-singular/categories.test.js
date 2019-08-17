const Categories = require('../../models-singular/categories.js');
// let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    const categories = new Categories();
    const testingCategories = {
      name: 'Sam',
      description: 'Redhead'
    };

    return categories.create(testingCategories)
      .then(savedCategories => {
        Object.keys(testingCategories).forEach(key => {
          expect(savedCategories[key]).toEqual(testingCategories[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can get() a category', () => {
    const categories = new Categories();
    const testingCategories = {
      name: 'Sam',
      description: 'Redhead'
    };

    return categories.create(testingCategories)
      .then(savedCategories => {
        return categories.get(savedCategories._id);
      })
      .then(resolvedCategories => {
        Object.keys(testingCategories).forEach(key =>{
          expect(resolvedCategories[key]).toEqual(testingCategories[key]);
          console.log(resolvedCategories)
        });
      })
      .catch(error => console.log(error));
  });

  it('can get() all categories', () => {
  });

  it('can update() a category', () => {
  });

  it('can delete() a category', () => {
  });

});