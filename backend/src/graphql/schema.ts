
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface SparqlQueryResult {
    head?: Nullable<HeadObject>;
    results?: Nullable<ResultObject>;
}

export interface HeadObject {
    vars?: Nullable<Nullable<string>[]>;
}

export interface ResultObject {
    bindings?: Nullable<Nullable<SparqlResultEntry>[]>;
}

export interface IQuery {
    sparqlQuery(queryString: string): Nullable<SparqlQueryResult> | Promise<Nullable<SparqlQueryResult>>;
}

export type SparqlResultEntry = any;
type Nullable<T> = T | null;
