class BaseQueryBuilder {
  constructor(model, params = {}) {
    this.model = model;
    if (!this.model) {
      throw new Error("Model is required");
    }
    this.filters = params.filters || {};
    this.fields = params.fields || [];
    this.sort = params.sort || { createdAt: -1 };
    this.populate = params.populate || [];
    this.limit = params.limit;
    this.page = params.page;
    this.pagination = this.buildPagination();
  }

  buildPagination() {
    this.page = parseInt(this.page) || 1;
    this.limit = parseInt(this.limit) || 10;
    return { skip: (this.page - 1) * this.limit, limit: this.limit };
  }

  build() {
    let query = this.model.find(this.filters);
    if (this.fields.length) query = query.select(this.fields.join(" "));
    if (this.sort) query = query.sort(this.sort);
    if (this.populate.length) query = query.populate(...this.populate);
    if (this.pagination) {
      query = query
        .skip(this.pagination.skip || 0)
        .limit(this.pagination.limit);
    }
    return query;
  }
}

export default BaseQueryBuilder;
