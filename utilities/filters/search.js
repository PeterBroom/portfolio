const elasticlunr = require('elasticlunr');

module.exports.search = (collection) => {
  // what fields we'd like our index to consist of
  var index = elasticlunr(function () {
    this.addField('title');
    this.addField('sub_heading');
    this.addField('meta_description');
    this.addField('meta_keywords');
    this.addField('tags');
    this.setRef('id');
  });

  // loop through each page and add it to the index
  collection.forEach((page) => {

    index.addDoc({
      id: page.url,
      title: page.template.frontMatter.data.title,
      meta_description: page.template.frontMatter.data.meta_description,
      meta_keywords: page.template.frontMatter.data.meta_keywords,
      tags: page.template.frontMatter.data.tags,
    });

  });
  return index.toJSON();
};