
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class SparqlQueryResult {
    head?: Nullable<HeadObject>;
    results?: Nullable<ResultObject>;
}

export class HeadObject {
    vars?: Nullable<Nullable<string>[]>;
}

export class ResultObject {
    bindings?: Nullable<Nullable<SparqlResultEntry>[]>;
}

export class Expertise {
    name?: Nullable<string>;
    level?: Nullable<string>;
}

export class Expert {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    expertise?: Nullable<Nullable<Expertise>[]>;
}

export abstract class IQuery {
    abstract sparqlQuery(queryString: string): Nullable<SparqlQueryResult> | Promise<Nullable<SparqlQueryResult>>;

    abstract greeting(): Nullable<string> | Promise<Nullable<string>>;

    abstract experts(): Nullable<Nullable<Expert>[]> | Promise<Nullable<Nullable<Expert>[]>>;
}

export type SparqlResultEntry = any;
type Nullable<T> = T | null;
