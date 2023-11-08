/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model finance_manager
 *
 */
export type finance_manager = $Result.DefaultSelection<Prisma.$finance_managerPayload>;
/**
 * Model loan
 *
 */
export type loan = $Result.DefaultSelection<Prisma.$loanPayload>;
/**
 * Model loan_officer
 *
 */
export type loan_officer = $Result.DefaultSelection<Prisma.$loan_officerPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model vehicle
 *
 */
export type vehicle = $Result.DefaultSelection<Prisma.$vehiclePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Finance_managers
 * const finance_managers = await prisma.finance_manager.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Finance_managers
   * const finance_managers = await prisma.finance_manager.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.finance_manager`: Exposes CRUD operations for the **finance_manager** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Finance_managers
   * const finance_managers = await prisma.finance_manager.findMany()
   * ```
   */
  get finance_manager(): Prisma.finance_managerDelegate<ExtArgs>;

  /**
   * `prisma.loan`: Exposes CRUD operations for the **loan** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Loans
   * const loans = await prisma.loan.findMany()
   * ```
   */
  get loan(): Prisma.loanDelegate<ExtArgs>;

  /**
   * `prisma.loan_officer`: Exposes CRUD operations for the **loan_officer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Loan_officers
   * const loan_officers = await prisma.loan_officer.findMany()
   * ```
   */
  get loan_officer(): Prisma.loan_officerDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **vehicle** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Vehicles
   * const vehicles = await prisma.vehicle.findMany()
   * ```
   */
  get vehicle(): Prisma.vehicleDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    finance_manager: 'finance_manager';
    loan: 'loan';
    loan_officer: 'loan_officer';
    organization: 'organization';
    user: 'user';
    vehicle: 'vehicle';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'finance_manager' | 'loan' | 'loan_officer' | 'organization' | 'user' | 'vehicle';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      finance_manager: {
        payload: Prisma.$finance_managerPayload<ExtArgs>;
        fields: Prisma.finance_managerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.finance_managerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_managerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.finance_managerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_managerPayload>;
          };
          findFirst: {
            args: Prisma.finance_managerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_managerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.finance_managerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_managerPayload>;
          };
          findMany: {
            args: Prisma.finance_managerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_managerPayload>[];
          };
          create: {
            args: Prisma.finance_managerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_managerPayload>;
          };
          createMany: {
            args: Prisma.finance_managerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.finance_managerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_managerPayload>;
          };
          update: {
            args: Prisma.finance_managerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_managerPayload>;
          };
          deleteMany: {
            args: Prisma.finance_managerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.finance_managerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.finance_managerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_managerPayload>;
          };
          aggregate: {
            args: Prisma.Finance_managerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFinance_manager>;
          };
          groupBy: {
            args: Prisma.finance_managerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Finance_managerGroupByOutputType>[];
          };
          count: {
            args: Prisma.finance_managerCountArgs<ExtArgs>;
            result: $Utils.Optional<Finance_managerCountAggregateOutputType> | number;
          };
        };
      };
      loan: {
        payload: Prisma.$loanPayload<ExtArgs>;
        fields: Prisma.loanFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.loanFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.loanFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          findFirst: {
            args: Prisma.loanFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.loanFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          findMany: {
            args: Prisma.loanFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>[];
          };
          create: {
            args: Prisma.loanCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          createMany: {
            args: Prisma.loanCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.loanDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          update: {
            args: Prisma.loanUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          deleteMany: {
            args: Prisma.loanDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.loanUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.loanUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          aggregate: {
            args: Prisma.LoanAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLoan>;
          };
          groupBy: {
            args: Prisma.loanGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LoanGroupByOutputType>[];
          };
          count: {
            args: Prisma.loanCountArgs<ExtArgs>;
            result: $Utils.Optional<LoanCountAggregateOutputType> | number;
          };
        };
      };
      loan_officer: {
        payload: Prisma.$loan_officerPayload<ExtArgs>;
        fields: Prisma.loan_officerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.loan_officerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.loan_officerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          findFirst: {
            args: Prisma.loan_officerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.loan_officerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          findMany: {
            args: Prisma.loan_officerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>[];
          };
          create: {
            args: Prisma.loan_officerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          createMany: {
            args: Prisma.loan_officerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.loan_officerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          update: {
            args: Prisma.loan_officerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          deleteMany: {
            args: Prisma.loan_officerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.loan_officerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.loan_officerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          aggregate: {
            args: Prisma.Loan_officerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLoan_officer>;
          };
          groupBy: {
            args: Prisma.loan_officerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Loan_officerGroupByOutputType>[];
          };
          count: {
            args: Prisma.loan_officerCountArgs<ExtArgs>;
            result: $Utils.Optional<Loan_officerCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      vehicle: {
        payload: Prisma.$vehiclePayload<ExtArgs>;
        fields: Prisma.vehicleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.vehicleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.vehicleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          findFirst: {
            args: Prisma.vehicleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.vehicleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          findMany: {
            args: Prisma.vehicleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>[];
          };
          create: {
            args: Prisma.vehicleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          createMany: {
            args: Prisma.vehicleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.vehicleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          update: {
            args: Prisma.vehicleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          deleteMany: {
            args: Prisma.vehicleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.vehicleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.vehicleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVehicle>;
          };
          groupBy: {
            args: Prisma.vehicleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VehicleGroupByOutputType>[];
          };
          count: {
            args: Prisma.vehicleCountArgs<ExtArgs>;
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type LoanCountOutputType
   */

  export type LoanCountOutputType = {
    finance_manager: number;
    loan_officer: number;
  };

  export type LoanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    finance_manager?: boolean | LoanCountOutputTypeCountFinance_managerArgs;
    loan_officer?: boolean | LoanCountOutputTypeCountLoan_officerArgs;
  };

  // Custom InputTypes

  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanCountOutputType
     */
    select?: LoanCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeCountFinance_managerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: finance_managerWhereInput;
  };

  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeCountLoan_officerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: loan_officerWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    user: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OrganizationCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: userWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    finance_manager: number;
    loan: number;
    loan_officer: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    finance_manager?: boolean | UserCountOutputTypeCountFinance_managerArgs;
    loan?: boolean | UserCountOutputTypeCountLoanArgs;
    loan_officer?: boolean | UserCountOutputTypeCountLoan_officerArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinance_managerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: finance_managerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loanWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoan_officerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: loan_officerWhereInput;
  };

  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    loan: number;
  };

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | VehicleCountOutputTypeCountLoanArgs;
  };

  // Custom InputTypes

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountLoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: loanWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model finance_manager
   */

  export type AggregateFinance_manager = {
    _count: Finance_managerCountAggregateOutputType | null;
    _avg: Finance_managerAvgAggregateOutputType | null;
    _sum: Finance_managerSumAggregateOutputType | null;
    _min: Finance_managerMinAggregateOutputType | null;
    _max: Finance_managerMaxAggregateOutputType | null;
  };

  export type Finance_managerAvgAggregateOutputType = {
    total_loans_managed: number | null;
    total_loans_approved: number | null;
    total_loans_rejected: number | null;
  };

  export type Finance_managerSumAggregateOutputType = {
    total_loans_managed: number | null;
    total_loans_approved: number | null;
    total_loans_rejected: number | null;
  };

  export type Finance_managerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    loan_id: string | null;
    total_loans_managed: number | null;
    total_loans_approved: number | null;
    total_loans_rejected: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Finance_managerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    loan_id: string | null;
    total_loans_managed: number | null;
    total_loans_approved: number | null;
    total_loans_rejected: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Finance_managerCountAggregateOutputType = {
    id: number;
    user_id: number;
    loan_id: number;
    total_loans_managed: number;
    total_loans_approved: number;
    total_loans_rejected: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Finance_managerAvgAggregateInputType = {
    total_loans_managed?: true;
    total_loans_approved?: true;
    total_loans_rejected?: true;
  };

  export type Finance_managerSumAggregateInputType = {
    total_loans_managed?: true;
    total_loans_approved?: true;
    total_loans_rejected?: true;
  };

  export type Finance_managerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    loan_id?: true;
    total_loans_managed?: true;
    total_loans_approved?: true;
    total_loans_rejected?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Finance_managerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    loan_id?: true;
    total_loans_managed?: true;
    total_loans_approved?: true;
    total_loans_rejected?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Finance_managerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    loan_id?: true;
    total_loans_managed?: true;
    total_loans_approved?: true;
    total_loans_rejected?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Finance_managerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which finance_manager to aggregate.
     */
    where?: finance_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of finance_managers to fetch.
     */
    orderBy?: finance_managerOrderByWithRelationInput | finance_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: finance_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` finance_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` finance_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned finance_managers
     **/
    _count?: true | Finance_managerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Finance_managerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Finance_managerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Finance_managerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Finance_managerMaxAggregateInputType;
  };

  export type GetFinance_managerAggregateType<T extends Finance_managerAggregateArgs> = {
    [P in keyof T & keyof AggregateFinance_manager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinance_manager[P]>
      : GetScalarType<T[P], AggregateFinance_manager[P]>;
  };

  export type finance_managerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: finance_managerWhereInput;
    orderBy?: finance_managerOrderByWithAggregationInput | finance_managerOrderByWithAggregationInput[];
    by: Finance_managerScalarFieldEnum[] | Finance_managerScalarFieldEnum;
    having?: finance_managerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Finance_managerCountAggregateInputType | true;
    _avg?: Finance_managerAvgAggregateInputType;
    _sum?: Finance_managerSumAggregateInputType;
    _min?: Finance_managerMinAggregateInputType;
    _max?: Finance_managerMaxAggregateInputType;
  };

  export type Finance_managerGroupByOutputType = {
    id: string;
    user_id: string;
    loan_id: string;
    total_loans_managed: number | null;
    total_loans_approved: number | null;
    total_loans_rejected: number | null;
    created_at: Date;
    updated_at: Date;
    _count: Finance_managerCountAggregateOutputType | null;
    _avg: Finance_managerAvgAggregateOutputType | null;
    _sum: Finance_managerSumAggregateOutputType | null;
    _min: Finance_managerMinAggregateOutputType | null;
    _max: Finance_managerMaxAggregateOutputType | null;
  };

  type GetFinance_managerGroupByPayload<T extends finance_managerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Finance_managerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Finance_managerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Finance_managerGroupByOutputType[P]>
          : GetScalarType<T[P], Finance_managerGroupByOutputType[P]>;
      }
    >
  >;

  export type finance_managerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        loan_id?: boolean;
        total_loans_managed?: boolean;
        total_loans_approved?: boolean;
        total_loans_rejected?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        loan?: boolean | loanDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['finance_manager']
    >;

  export type finance_managerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    loan_id?: boolean;
    total_loans_managed?: boolean;
    total_loans_approved?: boolean;
    total_loans_rejected?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type finance_managerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | loanDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $finance_managerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'finance_manager';
    objects: {
      loan: Prisma.$loanPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        loan_id: string;
        total_loans_managed: number | null;
        total_loans_approved: number | null;
        total_loans_rejected: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['finance_manager']
    >;
    composites: {};
  };

  type finance_managerGetPayload<S extends boolean | null | undefined | finance_managerDefaultArgs> = $Result.GetResult<
    Prisma.$finance_managerPayload,
    S
  >;

  type finance_managerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    finance_managerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Finance_managerCountAggregateInputType | true;
  };

  export interface finance_managerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['finance_manager']; meta: { name: 'finance_manager' } };
    /**
     * Find zero or one Finance_manager that matches the filter.
     * @param {finance_managerFindUniqueArgs} args - Arguments to find a Finance_manager
     * @example
     * // Get one Finance_manager
     * const finance_manager = await prisma.finance_manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends finance_managerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, finance_managerFindUniqueArgs<ExtArgs>>,
    ): Prisma__finance_managerClient<
      $Result.GetResult<Prisma.$finance_managerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Finance_manager that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {finance_managerFindUniqueOrThrowArgs} args - Arguments to find a Finance_manager
     * @example
     * // Get one Finance_manager
     * const finance_manager = await prisma.finance_manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends finance_managerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, finance_managerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__finance_managerClient<
      $Result.GetResult<Prisma.$finance_managerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Finance_manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_managerFindFirstArgs} args - Arguments to find a Finance_manager
     * @example
     * // Get one Finance_manager
     * const finance_manager = await prisma.finance_manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends finance_managerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, finance_managerFindFirstArgs<ExtArgs>>,
    ): Prisma__finance_managerClient<
      $Result.GetResult<Prisma.$finance_managerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Finance_manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_managerFindFirstOrThrowArgs} args - Arguments to find a Finance_manager
     * @example
     * // Get one Finance_manager
     * const finance_manager = await prisma.finance_manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends finance_managerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, finance_managerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__finance_managerClient<
      $Result.GetResult<Prisma.$finance_managerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Finance_managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_managerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Finance_managers
     * const finance_managers = await prisma.finance_manager.findMany()
     *
     * // Get first 10 Finance_managers
     * const finance_managers = await prisma.finance_manager.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const finance_managerWithIdOnly = await prisma.finance_manager.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends finance_managerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, finance_managerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finance_managerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Finance_manager.
     * @param {finance_managerCreateArgs} args - Arguments to create a Finance_manager.
     * @example
     * // Create one Finance_manager
     * const Finance_manager = await prisma.finance_manager.create({
     *   data: {
     *     // ... data to create a Finance_manager
     *   }
     * })
     *
     **/
    create<T extends finance_managerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, finance_managerCreateArgs<ExtArgs>>,
    ): Prisma__finance_managerClient<
      $Result.GetResult<Prisma.$finance_managerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Finance_managers.
     *     @param {finance_managerCreateManyArgs} args - Arguments to create many Finance_managers.
     *     @example
     *     // Create many Finance_managers
     *     const finance_manager = await prisma.finance_manager.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends finance_managerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, finance_managerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Finance_manager.
     * @param {finance_managerDeleteArgs} args - Arguments to delete one Finance_manager.
     * @example
     * // Delete one Finance_manager
     * const Finance_manager = await prisma.finance_manager.delete({
     *   where: {
     *     // ... filter to delete one Finance_manager
     *   }
     * })
     *
     **/
    delete<T extends finance_managerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, finance_managerDeleteArgs<ExtArgs>>,
    ): Prisma__finance_managerClient<
      $Result.GetResult<Prisma.$finance_managerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Finance_manager.
     * @param {finance_managerUpdateArgs} args - Arguments to update one Finance_manager.
     * @example
     * // Update one Finance_manager
     * const finance_manager = await prisma.finance_manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends finance_managerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, finance_managerUpdateArgs<ExtArgs>>,
    ): Prisma__finance_managerClient<
      $Result.GetResult<Prisma.$finance_managerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Finance_managers.
     * @param {finance_managerDeleteManyArgs} args - Arguments to filter Finance_managers to delete.
     * @example
     * // Delete a few Finance_managers
     * const { count } = await prisma.finance_manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends finance_managerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, finance_managerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Finance_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_managerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Finance_managers
     * const finance_manager = await prisma.finance_manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends finance_managerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, finance_managerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Finance_manager.
     * @param {finance_managerUpsertArgs} args - Arguments to update or create a Finance_manager.
     * @example
     * // Update or create a Finance_manager
     * const finance_manager = await prisma.finance_manager.upsert({
     *   create: {
     *     // ... data to create a Finance_manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finance_manager we want to update
     *   }
     * })
     **/
    upsert<T extends finance_managerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, finance_managerUpsertArgs<ExtArgs>>,
    ): Prisma__finance_managerClient<
      $Result.GetResult<Prisma.$finance_managerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Finance_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_managerCountArgs} args - Arguments to filter Finance_managers to count.
     * @example
     * // Count the number of Finance_managers
     * const count = await prisma.finance_manager.count({
     *   where: {
     *     // ... the filter for the Finance_managers we want to count
     *   }
     * })
     **/
    count<T extends finance_managerCountArgs>(
      args?: Subset<T, finance_managerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Finance_managerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Finance_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Finance_managerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Finance_managerAggregateArgs>(
      args: Subset<T, Finance_managerAggregateArgs>,
    ): Prisma.PrismaPromise<GetFinance_managerAggregateType<T>>;

    /**
     * Group by Finance_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_managerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends finance_managerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: finance_managerGroupByArgs['orderBy'] }
        : { orderBy?: finance_managerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, finance_managerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetFinance_managerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the finance_manager model
     */
    readonly fields: finance_managerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for finance_manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__finance_managerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    loan<T extends loanDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, loanDefaultArgs<ExtArgs>>,
    ): Prisma__loanClient<
      $Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the finance_manager model
   */
  interface finance_managerFieldRefs {
    readonly id: FieldRef<'finance_manager', 'String'>;
    readonly user_id: FieldRef<'finance_manager', 'String'>;
    readonly loan_id: FieldRef<'finance_manager', 'String'>;
    readonly total_loans_managed: FieldRef<'finance_manager', 'Int'>;
    readonly total_loans_approved: FieldRef<'finance_manager', 'Int'>;
    readonly total_loans_rejected: FieldRef<'finance_manager', 'Int'>;
    readonly created_at: FieldRef<'finance_manager', 'DateTime'>;
    readonly updated_at: FieldRef<'finance_manager', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * finance_manager findUnique
   */
  export type finance_managerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_manager
     */
    select?: finance_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_managerInclude<ExtArgs> | null;
    /**
     * Filter, which finance_manager to fetch.
     */
    where: finance_managerWhereUniqueInput;
  };

  /**
   * finance_manager findUniqueOrThrow
   */
  export type finance_managerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the finance_manager
       */
      select?: finance_managerSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: finance_managerInclude<ExtArgs> | null;
      /**
       * Filter, which finance_manager to fetch.
       */
      where: finance_managerWhereUniqueInput;
    };

  /**
   * finance_manager findFirst
   */
  export type finance_managerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_manager
     */
    select?: finance_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_managerInclude<ExtArgs> | null;
    /**
     * Filter, which finance_manager to fetch.
     */
    where?: finance_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of finance_managers to fetch.
     */
    orderBy?: finance_managerOrderByWithRelationInput | finance_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for finance_managers.
     */
    cursor?: finance_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` finance_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` finance_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of finance_managers.
     */
    distinct?: Finance_managerScalarFieldEnum | Finance_managerScalarFieldEnum[];
  };

  /**
   * finance_manager findFirstOrThrow
   */
  export type finance_managerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the finance_manager
       */
      select?: finance_managerSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: finance_managerInclude<ExtArgs> | null;
      /**
       * Filter, which finance_manager to fetch.
       */
      where?: finance_managerWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of finance_managers to fetch.
       */
      orderBy?: finance_managerOrderByWithRelationInput | finance_managerOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for finance_managers.
       */
      cursor?: finance_managerWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` finance_managers from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` finance_managers.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of finance_managers.
       */
      distinct?: Finance_managerScalarFieldEnum | Finance_managerScalarFieldEnum[];
    };

  /**
   * finance_manager findMany
   */
  export type finance_managerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_manager
     */
    select?: finance_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_managerInclude<ExtArgs> | null;
    /**
     * Filter, which finance_managers to fetch.
     */
    where?: finance_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of finance_managers to fetch.
     */
    orderBy?: finance_managerOrderByWithRelationInput | finance_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing finance_managers.
     */
    cursor?: finance_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` finance_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` finance_managers.
     */
    skip?: number;
    distinct?: Finance_managerScalarFieldEnum | Finance_managerScalarFieldEnum[];
  };

  /**
   * finance_manager create
   */
  export type finance_managerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_manager
     */
    select?: finance_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_managerInclude<ExtArgs> | null;
    /**
     * The data needed to create a finance_manager.
     */
    data: XOR<finance_managerCreateInput, finance_managerUncheckedCreateInput>;
  };

  /**
   * finance_manager createMany
   */
  export type finance_managerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many finance_managers.
     */
    data: finance_managerCreateManyInput | finance_managerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * finance_manager update
   */
  export type finance_managerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_manager
     */
    select?: finance_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_managerInclude<ExtArgs> | null;
    /**
     * The data needed to update a finance_manager.
     */
    data: XOR<finance_managerUpdateInput, finance_managerUncheckedUpdateInput>;
    /**
     * Choose, which finance_manager to update.
     */
    where: finance_managerWhereUniqueInput;
  };

  /**
   * finance_manager updateMany
   */
  export type finance_managerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update finance_managers.
     */
    data: XOR<finance_managerUpdateManyMutationInput, finance_managerUncheckedUpdateManyInput>;
    /**
     * Filter which finance_managers to update
     */
    where?: finance_managerWhereInput;
  };

  /**
   * finance_manager upsert
   */
  export type finance_managerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_manager
     */
    select?: finance_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_managerInclude<ExtArgs> | null;
    /**
     * The filter to search for the finance_manager to update in case it exists.
     */
    where: finance_managerWhereUniqueInput;
    /**
     * In case the finance_manager found by the `where` argument doesn't exist, create a new finance_manager with this data.
     */
    create: XOR<finance_managerCreateInput, finance_managerUncheckedCreateInput>;
    /**
     * In case the finance_manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<finance_managerUpdateInput, finance_managerUncheckedUpdateInput>;
  };

  /**
   * finance_manager delete
   */
  export type finance_managerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_manager
     */
    select?: finance_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_managerInclude<ExtArgs> | null;
    /**
     * Filter which finance_manager to delete.
     */
    where: finance_managerWhereUniqueInput;
  };

  /**
   * finance_manager deleteMany
   */
  export type finance_managerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which finance_managers to delete
     */
    where?: finance_managerWhereInput;
  };

  /**
   * finance_manager without action
   */
  export type finance_managerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_manager
     */
    select?: finance_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_managerInclude<ExtArgs> | null;
  };

  /**
   * Model loan
   */

  export type AggregateLoan = {
    _count: LoanCountAggregateOutputType | null;
    _avg: LoanAvgAggregateOutputType | null;
    _sum: LoanSumAggregateOutputType | null;
    _min: LoanMinAggregateOutputType | null;
    _max: LoanMaxAggregateOutputType | null;
  };

  export type LoanAvgAggregateOutputType = {
    loan_amount: number | null;
    interest_rate: number | null;
    loan_term: number | null;
    monthly_payment: number | null;
  };

  export type LoanSumAggregateOutputType = {
    loan_amount: number | null;
    interest_rate: number | null;
    loan_term: number | null;
    monthly_payment: number | null;
  };

  export type LoanMinAggregateOutputType = {
    id: string | null;
    loan_amount: number | null;
    interest_rate: number | null;
    loan_term: number | null;
    monthly_payment: number | null;
    loan_status: string | null;
    vehicle_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LoanMaxAggregateOutputType = {
    id: string | null;
    loan_amount: number | null;
    interest_rate: number | null;
    loan_term: number | null;
    monthly_payment: number | null;
    loan_status: string | null;
    vehicle_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LoanCountAggregateOutputType = {
    id: number;
    loan_amount: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
    loan_status: number;
    vehicle_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type LoanAvgAggregateInputType = {
    loan_amount?: true;
    interest_rate?: true;
    loan_term?: true;
    monthly_payment?: true;
  };

  export type LoanSumAggregateInputType = {
    loan_amount?: true;
    interest_rate?: true;
    loan_term?: true;
    monthly_payment?: true;
  };

  export type LoanMinAggregateInputType = {
    id?: true;
    loan_amount?: true;
    interest_rate?: true;
    loan_term?: true;
    monthly_payment?: true;
    loan_status?: true;
    vehicle_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LoanMaxAggregateInputType = {
    id?: true;
    loan_amount?: true;
    interest_rate?: true;
    loan_term?: true;
    monthly_payment?: true;
    loan_status?: true;
    vehicle_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LoanCountAggregateInputType = {
    id?: true;
    loan_amount?: true;
    interest_rate?: true;
    loan_term?: true;
    monthly_payment?: true;
    loan_status?: true;
    vehicle_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type LoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan to aggregate.
     */
    where?: loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned loans
     **/
    _count?: true | LoanCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LoanAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LoanSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LoanMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LoanMaxAggregateInputType;
  };

  export type GetLoanAggregateType<T extends LoanAggregateArgs> = {
    [P in keyof T & keyof AggregateLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan[P]>
      : GetScalarType<T[P], AggregateLoan[P]>;
  };

  export type loanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loanWhereInput;
    orderBy?: loanOrderByWithAggregationInput | loanOrderByWithAggregationInput[];
    by: LoanScalarFieldEnum[] | LoanScalarFieldEnum;
    having?: loanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LoanCountAggregateInputType | true;
    _avg?: LoanAvgAggregateInputType;
    _sum?: LoanSumAggregateInputType;
    _min?: LoanMinAggregateInputType;
    _max?: LoanMaxAggregateInputType;
  };

  export type LoanGroupByOutputType = {
    id: string;
    loan_amount: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
    loan_status: string;
    vehicle_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: LoanCountAggregateOutputType | null;
    _avg: LoanAvgAggregateOutputType | null;
    _sum: LoanSumAggregateOutputType | null;
    _min: LoanMinAggregateOutputType | null;
    _max: LoanMaxAggregateOutputType | null;
  };

  type GetLoanGroupByPayload<T extends loanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LoanGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LoanGroupByOutputType[P]>
          : GetScalarType<T[P], LoanGroupByOutputType[P]>;
      }
    >
  >;

  export type loanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      loan_amount?: boolean;
      interest_rate?: boolean;
      loan_term?: boolean;
      monthly_payment?: boolean;
      loan_status?: boolean;
      vehicle_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      finance_manager?: boolean | loan$finance_managerArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      vehicle?: boolean | vehicleDefaultArgs<ExtArgs>;
      loan_officer?: boolean | loan$loan_officerArgs<ExtArgs>;
      _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['loan']
  >;

  export type loanSelectScalar = {
    id?: boolean;
    loan_amount?: boolean;
    interest_rate?: boolean;
    loan_term?: boolean;
    monthly_payment?: boolean;
    loan_status?: boolean;
    vehicle_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type loanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    finance_manager?: boolean | loan$finance_managerArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>;
    loan_officer?: boolean | loan$loan_officerArgs<ExtArgs>;
    _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $loanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'loan';
    objects: {
      finance_manager: Prisma.$finance_managerPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      vehicle: Prisma.$vehiclePayload<ExtArgs>;
      loan_officer: Prisma.$loan_officerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        loan_amount: number;
        interest_rate: number;
        loan_term: number;
        monthly_payment: number;
        loan_status: string;
        vehicle_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['loan']
    >;
    composites: {};
  };

  type loanGetPayload<S extends boolean | null | undefined | loanDefaultArgs> = $Result.GetResult<
    Prisma.$loanPayload,
    S
  >;

  type loanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    loanFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: LoanCountAggregateInputType | true;
  };

  export interface loanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loan']; meta: { name: 'loan' } };
    /**
     * Find zero or one Loan that matches the filter.
     * @param {loanFindUniqueArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends loanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, loanFindUniqueArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Loan that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {loanFindUniqueOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends loanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loanFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Loan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindFirstArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends loanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, loanFindFirstArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Loan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindFirstOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends loanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loanFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Loans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loans
     * const loans = await prisma.loan.findMany()
     *
     * // Get first 10 Loans
     * const loans = await prisma.loan.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const loanWithIdOnly = await prisma.loan.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends loanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loanFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Loan.
     * @param {loanCreateArgs} args - Arguments to create a Loan.
     * @example
     * // Create one Loan
     * const Loan = await prisma.loan.create({
     *   data: {
     *     // ... data to create a Loan
     *   }
     * })
     *
     **/
    create<T extends loanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, loanCreateArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Loans.
     *     @param {loanCreateManyArgs} args - Arguments to create many Loans.
     *     @example
     *     // Create many Loans
     *     const loan = await prisma.loan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends loanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loanCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Loan.
     * @param {loanDeleteArgs} args - Arguments to delete one Loan.
     * @example
     * // Delete one Loan
     * const Loan = await prisma.loan.delete({
     *   where: {
     *     // ... filter to delete one Loan
     *   }
     * })
     *
     **/
    delete<T extends loanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, loanDeleteArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Loan.
     * @param {loanUpdateArgs} args - Arguments to update one Loan.
     * @example
     * // Update one Loan
     * const loan = await prisma.loan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends loanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, loanUpdateArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Loans.
     * @param {loanDeleteManyArgs} args - Arguments to filter Loans to delete.
     * @example
     * // Delete a few Loans
     * const { count } = await prisma.loan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends loanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loanDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends loanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, loanUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Loan.
     * @param {loanUpsertArgs} args - Arguments to update or create a Loan.
     * @example
     * // Update or create a Loan
     * const loan = await prisma.loan.upsert({
     *   create: {
     *     // ... data to create a Loan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan we want to update
     *   }
     * })
     **/
    upsert<T extends loanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, loanUpsertArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanCountArgs} args - Arguments to filter Loans to count.
     * @example
     * // Count the number of Loans
     * const count = await prisma.loan.count({
     *   where: {
     *     // ... the filter for the Loans we want to count
     *   }
     * })
     **/
    count<T extends loanCountArgs>(
      args?: Subset<T, loanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends LoanAggregateArgs>(
      args: Subset<T, LoanAggregateArgs>,
    ): Prisma.PrismaPromise<GetLoanAggregateType<T>>;

    /**
     * Group by Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends loanGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loanGroupByArgs['orderBy'] }
        : { orderBy?: loanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, loanGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the loan model
     */
    readonly fields: loanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loanClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    finance_manager<T extends loan$finance_managerArgs<ExtArgs> = {}>(
      args?: Subset<T, loan$finance_managerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finance_managerPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    vehicle<T extends vehicleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, vehicleDefaultArgs<ExtArgs>>,
    ): Prisma__vehicleClient<
      $Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    loan_officer<T extends loan$loan_officerArgs<ExtArgs> = {}>(
      args?: Subset<T, loan$loan_officerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the loan model
   */
  interface loanFieldRefs {
    readonly id: FieldRef<'loan', 'String'>;
    readonly loan_amount: FieldRef<'loan', 'Int'>;
    readonly interest_rate: FieldRef<'loan', 'Int'>;
    readonly loan_term: FieldRef<'loan', 'Int'>;
    readonly monthly_payment: FieldRef<'loan', 'Int'>;
    readonly loan_status: FieldRef<'loan', 'String'>;
    readonly vehicle_id: FieldRef<'loan', 'String'>;
    readonly user_id: FieldRef<'loan', 'String'>;
    readonly created_at: FieldRef<'loan', 'DateTime'>;
    readonly updated_at: FieldRef<'loan', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * loan findUnique
   */
  export type loanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter, which loan to fetch.
     */
    where: loanWhereUniqueInput;
  };

  /**
   * loan findUniqueOrThrow
   */
  export type loanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter, which loan to fetch.
     */
    where: loanWhereUniqueInput;
  };

  /**
   * loan findFirst
   */
  export type loanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter, which loan to fetch.
     */
    where?: loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for loans.
     */
    cursor?: loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[];
  };

  /**
   * loan findFirstOrThrow
   */
  export type loanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter, which loan to fetch.
     */
    where?: loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for loans.
     */
    cursor?: loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[];
  };

  /**
   * loan findMany
   */
  export type loanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter, which loans to fetch.
     */
    where?: loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing loans.
     */
    cursor?: loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loans.
     */
    skip?: number;
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[];
  };

  /**
   * loan create
   */
  export type loanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * The data needed to create a loan.
     */
    data: XOR<loanCreateInput, loanUncheckedCreateInput>;
  };

  /**
   * loan createMany
   */
  export type loanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loans.
     */
    data: loanCreateManyInput | loanCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * loan update
   */
  export type loanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * The data needed to update a loan.
     */
    data: XOR<loanUpdateInput, loanUncheckedUpdateInput>;
    /**
     * Choose, which loan to update.
     */
    where: loanWhereUniqueInput;
  };

  /**
   * loan updateMany
   */
  export type loanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loans.
     */
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyInput>;
    /**
     * Filter which loans to update
     */
    where?: loanWhereInput;
  };

  /**
   * loan upsert
   */
  export type loanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * The filter to search for the loan to update in case it exists.
     */
    where: loanWhereUniqueInput;
    /**
     * In case the loan found by the `where` argument doesn't exist, create a new loan with this data.
     */
    create: XOR<loanCreateInput, loanUncheckedCreateInput>;
    /**
     * In case the loan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loanUpdateInput, loanUncheckedUpdateInput>;
  };

  /**
   * loan delete
   */
  export type loanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter which loan to delete.
     */
    where: loanWhereUniqueInput;
  };

  /**
   * loan deleteMany
   */
  export type loanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loans to delete
     */
    where?: loanWhereInput;
  };

  /**
   * loan.finance_manager
   */
  export type loan$finance_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_manager
     */
    select?: finance_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_managerInclude<ExtArgs> | null;
    where?: finance_managerWhereInput;
    orderBy?: finance_managerOrderByWithRelationInput | finance_managerOrderByWithRelationInput[];
    cursor?: finance_managerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Finance_managerScalarFieldEnum | Finance_managerScalarFieldEnum[];
  };

  /**
   * loan.loan_officer
   */
  export type loan$loan_officerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    where?: loan_officerWhereInput;
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    cursor?: loan_officerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Loan_officerScalarFieldEnum | Loan_officerScalarFieldEnum[];
  };

  /**
   * loan without action
   */
  export type loanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
  };

  /**
   * Model loan_officer
   */

  export type AggregateLoan_officer = {
    _count: Loan_officerCountAggregateOutputType | null;
    _avg: Loan_officerAvgAggregateOutputType | null;
    _sum: Loan_officerSumAggregateOutputType | null;
    _min: Loan_officerMinAggregateOutputType | null;
    _max: Loan_officerMaxAggregateOutputType | null;
  };

  export type Loan_officerAvgAggregateOutputType = {
    total_loans_processed: number | null;
    total_loans_approved: number | null;
    total_loans_rejected: number | null;
  };

  export type Loan_officerSumAggregateOutputType = {
    total_loans_processed: number | null;
    total_loans_approved: number | null;
    total_loans_rejected: number | null;
  };

  export type Loan_officerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    loan_id: string | null;
    total_loans_processed: number | null;
    total_loans_approved: number | null;
    total_loans_rejected: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Loan_officerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    loan_id: string | null;
    total_loans_processed: number | null;
    total_loans_approved: number | null;
    total_loans_rejected: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Loan_officerCountAggregateOutputType = {
    id: number;
    user_id: number;
    loan_id: number;
    total_loans_processed: number;
    total_loans_approved: number;
    total_loans_rejected: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Loan_officerAvgAggregateInputType = {
    total_loans_processed?: true;
    total_loans_approved?: true;
    total_loans_rejected?: true;
  };

  export type Loan_officerSumAggregateInputType = {
    total_loans_processed?: true;
    total_loans_approved?: true;
    total_loans_rejected?: true;
  };

  export type Loan_officerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    loan_id?: true;
    total_loans_processed?: true;
    total_loans_approved?: true;
    total_loans_rejected?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Loan_officerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    loan_id?: true;
    total_loans_processed?: true;
    total_loans_approved?: true;
    total_loans_rejected?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Loan_officerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    loan_id?: true;
    total_loans_processed?: true;
    total_loans_approved?: true;
    total_loans_rejected?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Loan_officerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan_officer to aggregate.
     */
    where?: loan_officerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loan_officers to fetch.
     */
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: loan_officerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loan_officers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loan_officers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned loan_officers
     **/
    _count?: true | Loan_officerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Loan_officerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Loan_officerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Loan_officerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Loan_officerMaxAggregateInputType;
  };

  export type GetLoan_officerAggregateType<T extends Loan_officerAggregateArgs> = {
    [P in keyof T & keyof AggregateLoan_officer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan_officer[P]>
      : GetScalarType<T[P], AggregateLoan_officer[P]>;
  };

  export type loan_officerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loan_officerWhereInput;
    orderBy?: loan_officerOrderByWithAggregationInput | loan_officerOrderByWithAggregationInput[];
    by: Loan_officerScalarFieldEnum[] | Loan_officerScalarFieldEnum;
    having?: loan_officerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Loan_officerCountAggregateInputType | true;
    _avg?: Loan_officerAvgAggregateInputType;
    _sum?: Loan_officerSumAggregateInputType;
    _min?: Loan_officerMinAggregateInputType;
    _max?: Loan_officerMaxAggregateInputType;
  };

  export type Loan_officerGroupByOutputType = {
    id: string;
    user_id: string;
    loan_id: string;
    total_loans_processed: number | null;
    total_loans_approved: number | null;
    total_loans_rejected: number | null;
    created_at: Date;
    updated_at: Date;
    _count: Loan_officerCountAggregateOutputType | null;
    _avg: Loan_officerAvgAggregateOutputType | null;
    _sum: Loan_officerSumAggregateOutputType | null;
    _min: Loan_officerMinAggregateOutputType | null;
    _max: Loan_officerMaxAggregateOutputType | null;
  };

  type GetLoan_officerGroupByPayload<T extends loan_officerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Loan_officerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Loan_officerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Loan_officerGroupByOutputType[P]>
          : GetScalarType<T[P], Loan_officerGroupByOutputType[P]>;
      }
    >
  >;

  export type loan_officerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        loan_id?: boolean;
        total_loans_processed?: boolean;
        total_loans_approved?: boolean;
        total_loans_rejected?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        loan?: boolean | loanDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['loan_officer']
    >;

  export type loan_officerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    loan_id?: boolean;
    total_loans_processed?: boolean;
    total_loans_approved?: boolean;
    total_loans_rejected?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type loan_officerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | loanDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $loan_officerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'loan_officer';
    objects: {
      loan: Prisma.$loanPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        loan_id: string;
        total_loans_processed: number | null;
        total_loans_approved: number | null;
        total_loans_rejected: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['loan_officer']
    >;
    composites: {};
  };

  type loan_officerGetPayload<S extends boolean | null | undefined | loan_officerDefaultArgs> = $Result.GetResult<
    Prisma.$loan_officerPayload,
    S
  >;

  type loan_officerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    loan_officerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Loan_officerCountAggregateInputType | true;
  };

  export interface loan_officerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loan_officer']; meta: { name: 'loan_officer' } };
    /**
     * Find zero or one Loan_officer that matches the filter.
     * @param {loan_officerFindUniqueArgs} args - Arguments to find a Loan_officer
     * @example
     * // Get one Loan_officer
     * const loan_officer = await prisma.loan_officer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends loan_officerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerFindUniqueArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<
      $Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Loan_officer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {loan_officerFindUniqueOrThrowArgs} args - Arguments to find a Loan_officer
     * @example
     * // Get one Loan_officer
     * const loan_officer = await prisma.loan_officer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends loan_officerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<
      $Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Loan_officer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerFindFirstArgs} args - Arguments to find a Loan_officer
     * @example
     * // Get one Loan_officer
     * const loan_officer = await prisma.loan_officer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends loan_officerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerFindFirstArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<
      $Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Loan_officer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerFindFirstOrThrowArgs} args - Arguments to find a Loan_officer
     * @example
     * // Get one Loan_officer
     * const loan_officer = await prisma.loan_officer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends loan_officerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<
      $Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Loan_officers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loan_officers
     * const loan_officers = await prisma.loan_officer.findMany()
     *
     * // Get first 10 Loan_officers
     * const loan_officers = await prisma.loan_officer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const loan_officerWithIdOnly = await prisma.loan_officer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends loan_officerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Loan_officer.
     * @param {loan_officerCreateArgs} args - Arguments to create a Loan_officer.
     * @example
     * // Create one Loan_officer
     * const Loan_officer = await prisma.loan_officer.create({
     *   data: {
     *     // ... data to create a Loan_officer
     *   }
     * })
     *
     **/
    create<T extends loan_officerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerCreateArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Loan_officers.
     *     @param {loan_officerCreateManyArgs} args - Arguments to create many Loan_officers.
     *     @example
     *     // Create many Loan_officers
     *     const loan_officer = await prisma.loan_officer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends loan_officerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Loan_officer.
     * @param {loan_officerDeleteArgs} args - Arguments to delete one Loan_officer.
     * @example
     * // Delete one Loan_officer
     * const Loan_officer = await prisma.loan_officer.delete({
     *   where: {
     *     // ... filter to delete one Loan_officer
     *   }
     * })
     *
     **/
    delete<T extends loan_officerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerDeleteArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Loan_officer.
     * @param {loan_officerUpdateArgs} args - Arguments to update one Loan_officer.
     * @example
     * // Update one Loan_officer
     * const loan_officer = await prisma.loan_officer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends loan_officerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerUpdateArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Loan_officers.
     * @param {loan_officerDeleteManyArgs} args - Arguments to filter Loan_officers to delete.
     * @example
     * // Delete a few Loan_officers
     * const { count } = await prisma.loan_officer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends loan_officerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Loan_officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loan_officers
     * const loan_officer = await prisma.loan_officer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends loan_officerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Loan_officer.
     * @param {loan_officerUpsertArgs} args - Arguments to update or create a Loan_officer.
     * @example
     * // Update or create a Loan_officer
     * const loan_officer = await prisma.loan_officer.upsert({
     *   create: {
     *     // ... data to create a Loan_officer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan_officer we want to update
     *   }
     * })
     **/
    upsert<T extends loan_officerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerUpsertArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Loan_officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerCountArgs} args - Arguments to filter Loan_officers to count.
     * @example
     * // Count the number of Loan_officers
     * const count = await prisma.loan_officer.count({
     *   where: {
     *     // ... the filter for the Loan_officers we want to count
     *   }
     * })
     **/
    count<T extends loan_officerCountArgs>(
      args?: Subset<T, loan_officerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Loan_officerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Loan_officer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Loan_officerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Loan_officerAggregateArgs>(
      args: Subset<T, Loan_officerAggregateArgs>,
    ): Prisma.PrismaPromise<GetLoan_officerAggregateType<T>>;

    /**
     * Group by Loan_officer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends loan_officerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loan_officerGroupByArgs['orderBy'] }
        : { orderBy?: loan_officerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, loan_officerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLoan_officerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the loan_officer model
     */
    readonly fields: loan_officerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loan_officer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loan_officerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    loan<T extends loanDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, loanDefaultArgs<ExtArgs>>,
    ): Prisma__loanClient<
      $Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the loan_officer model
   */
  interface loan_officerFieldRefs {
    readonly id: FieldRef<'loan_officer', 'String'>;
    readonly user_id: FieldRef<'loan_officer', 'String'>;
    readonly loan_id: FieldRef<'loan_officer', 'String'>;
    readonly total_loans_processed: FieldRef<'loan_officer', 'Int'>;
    readonly total_loans_approved: FieldRef<'loan_officer', 'Int'>;
    readonly total_loans_rejected: FieldRef<'loan_officer', 'Int'>;
    readonly created_at: FieldRef<'loan_officer', 'DateTime'>;
    readonly updated_at: FieldRef<'loan_officer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * loan_officer findUnique
   */
  export type loan_officerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter, which loan_officer to fetch.
     */
    where: loan_officerWhereUniqueInput;
  };

  /**
   * loan_officer findUniqueOrThrow
   */
  export type loan_officerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter, which loan_officer to fetch.
     */
    where: loan_officerWhereUniqueInput;
  };

  /**
   * loan_officer findFirst
   */
  export type loan_officerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter, which loan_officer to fetch.
     */
    where?: loan_officerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loan_officers to fetch.
     */
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for loan_officers.
     */
    cursor?: loan_officerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loan_officers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loan_officers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of loan_officers.
     */
    distinct?: Loan_officerScalarFieldEnum | Loan_officerScalarFieldEnum[];
  };

  /**
   * loan_officer findFirstOrThrow
   */
  export type loan_officerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter, which loan_officer to fetch.
     */
    where?: loan_officerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loan_officers to fetch.
     */
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for loan_officers.
     */
    cursor?: loan_officerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loan_officers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loan_officers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of loan_officers.
     */
    distinct?: Loan_officerScalarFieldEnum | Loan_officerScalarFieldEnum[];
  };

  /**
   * loan_officer findMany
   */
  export type loan_officerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter, which loan_officers to fetch.
     */
    where?: loan_officerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loan_officers to fetch.
     */
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing loan_officers.
     */
    cursor?: loan_officerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loan_officers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loan_officers.
     */
    skip?: number;
    distinct?: Loan_officerScalarFieldEnum | Loan_officerScalarFieldEnum[];
  };

  /**
   * loan_officer create
   */
  export type loan_officerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * The data needed to create a loan_officer.
     */
    data: XOR<loan_officerCreateInput, loan_officerUncheckedCreateInput>;
  };

  /**
   * loan_officer createMany
   */
  export type loan_officerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loan_officers.
     */
    data: loan_officerCreateManyInput | loan_officerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * loan_officer update
   */
  export type loan_officerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * The data needed to update a loan_officer.
     */
    data: XOR<loan_officerUpdateInput, loan_officerUncheckedUpdateInput>;
    /**
     * Choose, which loan_officer to update.
     */
    where: loan_officerWhereUniqueInput;
  };

  /**
   * loan_officer updateMany
   */
  export type loan_officerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loan_officers.
     */
    data: XOR<loan_officerUpdateManyMutationInput, loan_officerUncheckedUpdateManyInput>;
    /**
     * Filter which loan_officers to update
     */
    where?: loan_officerWhereInput;
  };

  /**
   * loan_officer upsert
   */
  export type loan_officerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * The filter to search for the loan_officer to update in case it exists.
     */
    where: loan_officerWhereUniqueInput;
    /**
     * In case the loan_officer found by the `where` argument doesn't exist, create a new loan_officer with this data.
     */
    create: XOR<loan_officerCreateInput, loan_officerUncheckedCreateInput>;
    /**
     * In case the loan_officer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loan_officerUpdateInput, loan_officerUncheckedUpdateInput>;
  };

  /**
   * loan_officer delete
   */
  export type loan_officerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter which loan_officer to delete.
     */
    where: loan_officerWhereUniqueInput;
  };

  /**
   * loan_officer deleteMany
   */
  export type loan_officerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan_officers to delete
     */
    where?: loan_officerWhereInput;
  };

  /**
   * loan_officer without action
   */
  export type loan_officerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | organization$userArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | organization$userArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends organization$userArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.user
   */
  export type organization$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    organization_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    organization_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    organization_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    organization_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    organization_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    organization_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    organization_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      organization_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      finance_manager?: boolean | user$finance_managerArgs<ExtArgs>;
      loan?: boolean | user$loanArgs<ExtArgs>;
      loan_officer?: boolean | user$loan_officerArgs<ExtArgs>;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    organization_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    finance_manager?: boolean | user$finance_managerArgs<ExtArgs>;
    loan?: boolean | user$loanArgs<ExtArgs>;
    loan_officer?: boolean | user$loan_officerArgs<ExtArgs>;
    organization?: boolean | user$organizationArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      finance_manager: Prisma.$finance_managerPayload<ExtArgs>[];
      loan: Prisma.$loanPayload<ExtArgs>[];
      loan_officer: Prisma.$loan_officerPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        organization_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    finance_manager<T extends user$finance_managerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$finance_managerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finance_managerPayload<ExtArgs>, T, 'findMany'> | Null>;

    loan<T extends user$loanArgs<ExtArgs> = {}>(
      args?: Subset<T, user$loanArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findMany'> | Null>;

    loan_officer<T extends user$loan_officerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$loan_officerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly organization_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.finance_manager
   */
  export type user$finance_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_manager
     */
    select?: finance_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_managerInclude<ExtArgs> | null;
    where?: finance_managerWhereInput;
    orderBy?: finance_managerOrderByWithRelationInput | finance_managerOrderByWithRelationInput[];
    cursor?: finance_managerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Finance_managerScalarFieldEnum | Finance_managerScalarFieldEnum[];
  };

  /**
   * user.loan
   */
  export type user$loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    where?: loanWhereInput;
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    cursor?: loanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[];
  };

  /**
   * user.loan_officer
   */
  export type user$loan_officerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    where?: loan_officerWhereInput;
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    cursor?: loan_officerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Loan_officerScalarFieldEnum | Loan_officerScalarFieldEnum[];
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null;
    _avg: VehicleAvgAggregateOutputType | null;
    _sum: VehicleSumAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
  };

  export type VehicleAvgAggregateOutputType = {
    year: number | null;
    price: number | null;
  };

  export type VehicleSumAggregateOutputType = {
    year: number | null;
    price: number | null;
  };

  export type VehicleMinAggregateOutputType = {
    id: string | null;
    make: string | null;
    model: string | null;
    year: number | null;
    color: string | null;
    vin: string | null;
    price: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VehicleMaxAggregateOutputType = {
    id: string | null;
    make: string | null;
    model: string | null;
    year: number | null;
    color: string | null;
    vin: string | null;
    price: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VehicleCountAggregateOutputType = {
    id: number;
    make: number;
    model: number;
    year: number;
    color: number;
    vin: number;
    price: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type VehicleAvgAggregateInputType = {
    year?: true;
    price?: true;
  };

  export type VehicleSumAggregateInputType = {
    year?: true;
    price?: true;
  };

  export type VehicleMinAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    year?: true;
    color?: true;
    vin?: true;
    price?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VehicleMaxAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    year?: true;
    color?: true;
    vin?: true;
    price?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VehicleCountAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    year?: true;
    color?: true;
    vin?: true;
    price?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle to aggregate.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned vehicles
     **/
    _count?: true | VehicleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: VehicleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: VehicleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VehicleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VehicleMaxAggregateInputType;
  };

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
    [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>;
  };

  export type vehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicleWhereInput;
    orderBy?: vehicleOrderByWithAggregationInput | vehicleOrderByWithAggregationInput[];
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum;
    having?: vehicleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VehicleCountAggregateInputType | true;
    _avg?: VehicleAvgAggregateInputType;
    _sum?: VehicleSumAggregateInputType;
    _min?: VehicleMinAggregateInputType;
    _max?: VehicleMaxAggregateInputType;
  };

  export type VehicleGroupByOutputType = {
    id: string;
    make: string;
    model: string;
    year: number;
    color: string | null;
    vin: string;
    price: number;
    created_at: Date;
    updated_at: Date;
    _count: VehicleCountAggregateOutputType | null;
    _avg: VehicleAvgAggregateOutputType | null;
    _sum: VehicleSumAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
  };

  type GetVehicleGroupByPayload<T extends vehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof VehicleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
          : GetScalarType<T[P], VehicleGroupByOutputType[P]>;
      }
    >
  >;

  export type vehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      make?: boolean;
      model?: boolean;
      year?: boolean;
      color?: boolean;
      vin?: boolean;
      price?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      loan?: boolean | vehicle$loanArgs<ExtArgs>;
      _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['vehicle']
  >;

  export type vehicleSelectScalar = {
    id?: boolean;
    make?: boolean;
    model?: boolean;
    year?: boolean;
    color?: boolean;
    vin?: boolean;
    price?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type vehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | vehicle$loanArgs<ExtArgs>;
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $vehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'vehicle';
    objects: {
      loan: Prisma.$loanPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        make: string;
        model: string;
        year: number;
        color: string | null;
        vin: string;
        price: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['vehicle']
    >;
    composites: {};
  };

  type vehicleGetPayload<S extends boolean | null | undefined | vehicleDefaultArgs> = $Result.GetResult<
    Prisma.$vehiclePayload,
    S
  >;

  type vehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    vehicleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: VehicleCountAggregateInputType | true;
  };

  export interface vehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vehicle']; meta: { name: 'vehicle' } };
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {vehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends vehicleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleFindUniqueArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Vehicle that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {vehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends vehicleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__vehicleClient<
      $Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends vehicleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindFirstArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends vehicleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     *
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends vehicleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Vehicle.
     * @param {vehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     *
     **/
    create<T extends vehicleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleCreateArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Vehicles.
     *     @param {vehicleCreateManyArgs} args - Arguments to create many Vehicles.
     *     @example
     *     // Create many Vehicles
     *     const vehicle = await prisma.vehicle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends vehicleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Vehicle.
     * @param {vehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     *
     **/
    delete<T extends vehicleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleDeleteArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Vehicle.
     * @param {vehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends vehicleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleUpdateArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Vehicles.
     * @param {vehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends vehicleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends vehicleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Vehicle.
     * @param {vehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     **/
    upsert<T extends vehicleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleUpsertArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
     **/
    count<T extends vehicleCountArgs>(
      args?: Subset<T, vehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends VehicleAggregateArgs>(
      args: Subset<T, VehicleAggregateArgs>,
    ): Prisma.PrismaPromise<GetVehicleAggregateType<T>>;

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends vehicleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vehicleGroupByArgs['orderBy'] }
        : { orderBy?: vehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, vehicleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the vehicle model
     */
    readonly fields: vehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vehicleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    loan<T extends vehicle$loanArgs<ExtArgs> = {}>(
      args?: Subset<T, vehicle$loanArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the vehicle model
   */
  interface vehicleFieldRefs {
    readonly id: FieldRef<'vehicle', 'String'>;
    readonly make: FieldRef<'vehicle', 'String'>;
    readonly model: FieldRef<'vehicle', 'String'>;
    readonly year: FieldRef<'vehicle', 'Int'>;
    readonly color: FieldRef<'vehicle', 'String'>;
    readonly vin: FieldRef<'vehicle', 'String'>;
    readonly price: FieldRef<'vehicle', 'Int'>;
    readonly created_at: FieldRef<'vehicle', 'DateTime'>;
    readonly updated_at: FieldRef<'vehicle', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * vehicle findUnique
   */
  export type vehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle findUniqueOrThrow
   */
  export type vehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle findFirst
   */
  export type vehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vehicles.
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * vehicle findFirstOrThrow
   */
  export type vehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vehicles.
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * vehicle findMany
   */
  export type vehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicles to fetch.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing vehicles.
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * vehicle create
   */
  export type vehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * The data needed to create a vehicle.
     */
    data: XOR<vehicleCreateInput, vehicleUncheckedCreateInput>;
  };

  /**
   * vehicle createMany
   */
  export type vehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vehicles.
     */
    data: vehicleCreateManyInput | vehicleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * vehicle update
   */
  export type vehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * The data needed to update a vehicle.
     */
    data: XOR<vehicleUpdateInput, vehicleUncheckedUpdateInput>;
    /**
     * Choose, which vehicle to update.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle updateMany
   */
  export type vehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vehicles.
     */
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyInput>;
    /**
     * Filter which vehicles to update
     */
    where?: vehicleWhereInput;
  };

  /**
   * vehicle upsert
   */
  export type vehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * The filter to search for the vehicle to update in case it exists.
     */
    where: vehicleWhereUniqueInput;
    /**
     * In case the vehicle found by the `where` argument doesn't exist, create a new vehicle with this data.
     */
    create: XOR<vehicleCreateInput, vehicleUncheckedCreateInput>;
    /**
     * In case the vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vehicleUpdateInput, vehicleUncheckedUpdateInput>;
  };

  /**
   * vehicle delete
   */
  export type vehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter which vehicle to delete.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle deleteMany
   */
  export type vehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicles to delete
     */
    where?: vehicleWhereInput;
  };

  /**
   * vehicle.loan
   */
  export type vehicle$loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    where?: loanWhereInput;
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    cursor?: loanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[];
  };

  /**
   * vehicle without action
   */
  export type vehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const Finance_managerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    loan_id: 'loan_id';
    total_loans_managed: 'total_loans_managed';
    total_loans_approved: 'total_loans_approved';
    total_loans_rejected: 'total_loans_rejected';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Finance_managerScalarFieldEnum =
    (typeof Finance_managerScalarFieldEnum)[keyof typeof Finance_managerScalarFieldEnum];

  export const LoanScalarFieldEnum: {
    id: 'id';
    loan_amount: 'loan_amount';
    interest_rate: 'interest_rate';
    loan_term: 'loan_term';
    monthly_payment: 'monthly_payment';
    loan_status: 'loan_status';
    vehicle_id: 'vehicle_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type LoanScalarFieldEnum = (typeof LoanScalarFieldEnum)[keyof typeof LoanScalarFieldEnum];

  export const Loan_officerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    loan_id: 'loan_id';
    total_loans_processed: 'total_loans_processed';
    total_loans_approved: 'total_loans_approved';
    total_loans_rejected: 'total_loans_rejected';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Loan_officerScalarFieldEnum =
    (typeof Loan_officerScalarFieldEnum)[keyof typeof Loan_officerScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    organization_id: 'organization_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const VehicleScalarFieldEnum: {
    id: 'id';
    make: 'make';
    model: 'model';
    year: 'year';
    color: 'color';
    vin: 'vin';
    price: 'price';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type finance_managerWhereInput = {
    AND?: finance_managerWhereInput | finance_managerWhereInput[];
    OR?: finance_managerWhereInput[];
    NOT?: finance_managerWhereInput | finance_managerWhereInput[];
    id?: UuidFilter<'finance_manager'> | string;
    user_id?: UuidFilter<'finance_manager'> | string;
    loan_id?: UuidFilter<'finance_manager'> | string;
    total_loans_managed?: IntNullableFilter<'finance_manager'> | number | null;
    total_loans_approved?: IntNullableFilter<'finance_manager'> | number | null;
    total_loans_rejected?: IntNullableFilter<'finance_manager'> | number | null;
    created_at?: DateTimeFilter<'finance_manager'> | Date | string;
    updated_at?: DateTimeFilter<'finance_manager'> | Date | string;
    loan?: XOR<LoanRelationFilter, loanWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type finance_managerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    loan_id?: SortOrder;
    total_loans_managed?: SortOrderInput | SortOrder;
    total_loans_approved?: SortOrderInput | SortOrder;
    total_loans_rejected?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    loan?: loanOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type finance_managerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: finance_managerWhereInput | finance_managerWhereInput[];
      OR?: finance_managerWhereInput[];
      NOT?: finance_managerWhereInput | finance_managerWhereInput[];
      user_id?: UuidFilter<'finance_manager'> | string;
      loan_id?: UuidFilter<'finance_manager'> | string;
      total_loans_managed?: IntNullableFilter<'finance_manager'> | number | null;
      total_loans_approved?: IntNullableFilter<'finance_manager'> | number | null;
      total_loans_rejected?: IntNullableFilter<'finance_manager'> | number | null;
      created_at?: DateTimeFilter<'finance_manager'> | Date | string;
      updated_at?: DateTimeFilter<'finance_manager'> | Date | string;
      loan?: XOR<LoanRelationFilter, loanWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type finance_managerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    loan_id?: SortOrder;
    total_loans_managed?: SortOrderInput | SortOrder;
    total_loans_approved?: SortOrderInput | SortOrder;
    total_loans_rejected?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: finance_managerCountOrderByAggregateInput;
    _avg?: finance_managerAvgOrderByAggregateInput;
    _max?: finance_managerMaxOrderByAggregateInput;
    _min?: finance_managerMinOrderByAggregateInput;
    _sum?: finance_managerSumOrderByAggregateInput;
  };

  export type finance_managerScalarWhereWithAggregatesInput = {
    AND?: finance_managerScalarWhereWithAggregatesInput | finance_managerScalarWhereWithAggregatesInput[];
    OR?: finance_managerScalarWhereWithAggregatesInput[];
    NOT?: finance_managerScalarWhereWithAggregatesInput | finance_managerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'finance_manager'> | string;
    user_id?: UuidWithAggregatesFilter<'finance_manager'> | string;
    loan_id?: UuidWithAggregatesFilter<'finance_manager'> | string;
    total_loans_managed?: IntNullableWithAggregatesFilter<'finance_manager'> | number | null;
    total_loans_approved?: IntNullableWithAggregatesFilter<'finance_manager'> | number | null;
    total_loans_rejected?: IntNullableWithAggregatesFilter<'finance_manager'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'finance_manager'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'finance_manager'> | Date | string;
  };

  export type loanWhereInput = {
    AND?: loanWhereInput | loanWhereInput[];
    OR?: loanWhereInput[];
    NOT?: loanWhereInput | loanWhereInput[];
    id?: UuidFilter<'loan'> | string;
    loan_amount?: IntFilter<'loan'> | number;
    interest_rate?: IntFilter<'loan'> | number;
    loan_term?: IntFilter<'loan'> | number;
    monthly_payment?: IntFilter<'loan'> | number;
    loan_status?: StringFilter<'loan'> | string;
    vehicle_id?: UuidFilter<'loan'> | string;
    user_id?: UuidFilter<'loan'> | string;
    created_at?: DateTimeFilter<'loan'> | Date | string;
    updated_at?: DateTimeFilter<'loan'> | Date | string;
    finance_manager?: Finance_managerListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    vehicle?: XOR<VehicleRelationFilter, vehicleWhereInput>;
    loan_officer?: Loan_officerListRelationFilter;
  };

  export type loanOrderByWithRelationInput = {
    id?: SortOrder;
    loan_amount?: SortOrder;
    interest_rate?: SortOrder;
    loan_term?: SortOrder;
    monthly_payment?: SortOrder;
    loan_status?: SortOrder;
    vehicle_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    finance_manager?: finance_managerOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    vehicle?: vehicleOrderByWithRelationInput;
    loan_officer?: loan_officerOrderByRelationAggregateInput;
  };

  export type loanWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: loanWhereInput | loanWhereInput[];
      OR?: loanWhereInput[];
      NOT?: loanWhereInput | loanWhereInput[];
      loan_amount?: IntFilter<'loan'> | number;
      interest_rate?: IntFilter<'loan'> | number;
      loan_term?: IntFilter<'loan'> | number;
      monthly_payment?: IntFilter<'loan'> | number;
      loan_status?: StringFilter<'loan'> | string;
      vehicle_id?: UuidFilter<'loan'> | string;
      user_id?: UuidFilter<'loan'> | string;
      created_at?: DateTimeFilter<'loan'> | Date | string;
      updated_at?: DateTimeFilter<'loan'> | Date | string;
      finance_manager?: Finance_managerListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      vehicle?: XOR<VehicleRelationFilter, vehicleWhereInput>;
      loan_officer?: Loan_officerListRelationFilter;
    },
    'id'
  >;

  export type loanOrderByWithAggregationInput = {
    id?: SortOrder;
    loan_amount?: SortOrder;
    interest_rate?: SortOrder;
    loan_term?: SortOrder;
    monthly_payment?: SortOrder;
    loan_status?: SortOrder;
    vehicle_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: loanCountOrderByAggregateInput;
    _avg?: loanAvgOrderByAggregateInput;
    _max?: loanMaxOrderByAggregateInput;
    _min?: loanMinOrderByAggregateInput;
    _sum?: loanSumOrderByAggregateInput;
  };

  export type loanScalarWhereWithAggregatesInput = {
    AND?: loanScalarWhereWithAggregatesInput | loanScalarWhereWithAggregatesInput[];
    OR?: loanScalarWhereWithAggregatesInput[];
    NOT?: loanScalarWhereWithAggregatesInput | loanScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'loan'> | string;
    loan_amount?: IntWithAggregatesFilter<'loan'> | number;
    interest_rate?: IntWithAggregatesFilter<'loan'> | number;
    loan_term?: IntWithAggregatesFilter<'loan'> | number;
    monthly_payment?: IntWithAggregatesFilter<'loan'> | number;
    loan_status?: StringWithAggregatesFilter<'loan'> | string;
    vehicle_id?: UuidWithAggregatesFilter<'loan'> | string;
    user_id?: UuidWithAggregatesFilter<'loan'> | string;
    created_at?: DateTimeWithAggregatesFilter<'loan'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'loan'> | Date | string;
  };

  export type loan_officerWhereInput = {
    AND?: loan_officerWhereInput | loan_officerWhereInput[];
    OR?: loan_officerWhereInput[];
    NOT?: loan_officerWhereInput | loan_officerWhereInput[];
    id?: UuidFilter<'loan_officer'> | string;
    user_id?: UuidFilter<'loan_officer'> | string;
    loan_id?: UuidFilter<'loan_officer'> | string;
    total_loans_processed?: IntNullableFilter<'loan_officer'> | number | null;
    total_loans_approved?: IntNullableFilter<'loan_officer'> | number | null;
    total_loans_rejected?: IntNullableFilter<'loan_officer'> | number | null;
    created_at?: DateTimeFilter<'loan_officer'> | Date | string;
    updated_at?: DateTimeFilter<'loan_officer'> | Date | string;
    loan?: XOR<LoanRelationFilter, loanWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type loan_officerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    loan_id?: SortOrder;
    total_loans_processed?: SortOrderInput | SortOrder;
    total_loans_approved?: SortOrderInput | SortOrder;
    total_loans_rejected?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    loan?: loanOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type loan_officerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: loan_officerWhereInput | loan_officerWhereInput[];
      OR?: loan_officerWhereInput[];
      NOT?: loan_officerWhereInput | loan_officerWhereInput[];
      user_id?: UuidFilter<'loan_officer'> | string;
      loan_id?: UuidFilter<'loan_officer'> | string;
      total_loans_processed?: IntNullableFilter<'loan_officer'> | number | null;
      total_loans_approved?: IntNullableFilter<'loan_officer'> | number | null;
      total_loans_rejected?: IntNullableFilter<'loan_officer'> | number | null;
      created_at?: DateTimeFilter<'loan_officer'> | Date | string;
      updated_at?: DateTimeFilter<'loan_officer'> | Date | string;
      loan?: XOR<LoanRelationFilter, loanWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type loan_officerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    loan_id?: SortOrder;
    total_loans_processed?: SortOrderInput | SortOrder;
    total_loans_approved?: SortOrderInput | SortOrder;
    total_loans_rejected?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: loan_officerCountOrderByAggregateInput;
    _avg?: loan_officerAvgOrderByAggregateInput;
    _max?: loan_officerMaxOrderByAggregateInput;
    _min?: loan_officerMinOrderByAggregateInput;
    _sum?: loan_officerSumOrderByAggregateInput;
  };

  export type loan_officerScalarWhereWithAggregatesInput = {
    AND?: loan_officerScalarWhereWithAggregatesInput | loan_officerScalarWhereWithAggregatesInput[];
    OR?: loan_officerScalarWhereWithAggregatesInput[];
    NOT?: loan_officerScalarWhereWithAggregatesInput | loan_officerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'loan_officer'> | string;
    user_id?: UuidWithAggregatesFilter<'loan_officer'> | string;
    loan_id?: UuidWithAggregatesFilter<'loan_officer'> | string;
    total_loans_processed?: IntNullableWithAggregatesFilter<'loan_officer'> | number | null;
    total_loans_approved?: IntNullableWithAggregatesFilter<'loan_officer'> | number | null;
    total_loans_rejected?: IntNullableWithAggregatesFilter<'loan_officer'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'loan_officer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'loan_officer'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user?: UserListRelationFilter;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByRelationAggregateInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    organization_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    finance_manager?: Finance_managerListRelationFilter;
    loan?: LoanListRelationFilter;
    loan_officer?: Loan_officerListRelationFilter;
    organization?: XOR<OrganizationNullableRelationFilter, organizationWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    finance_manager?: finance_managerOrderByRelationAggregateInput;
    loan?: loanOrderByRelationAggregateInput;
    loan_officer?: loan_officerOrderByRelationAggregateInput;
    organization?: organizationOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      organization_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      finance_manager?: Finance_managerListRelationFilter;
      loan?: LoanListRelationFilter;
      loan_officer?: Loan_officerListRelationFilter;
      organization?: XOR<OrganizationNullableRelationFilter, organizationWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    organization_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type vehicleWhereInput = {
    AND?: vehicleWhereInput | vehicleWhereInput[];
    OR?: vehicleWhereInput[];
    NOT?: vehicleWhereInput | vehicleWhereInput[];
    id?: UuidFilter<'vehicle'> | string;
    make?: StringFilter<'vehicle'> | string;
    model?: StringFilter<'vehicle'> | string;
    year?: IntFilter<'vehicle'> | number;
    color?: StringNullableFilter<'vehicle'> | string | null;
    vin?: StringFilter<'vehicle'> | string;
    price?: IntFilter<'vehicle'> | number;
    created_at?: DateTimeFilter<'vehicle'> | Date | string;
    updated_at?: DateTimeFilter<'vehicle'> | Date | string;
    loan?: LoanListRelationFilter;
  };

  export type vehicleOrderByWithRelationInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrderInput | SortOrder;
    vin?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    loan?: loanOrderByRelationAggregateInput;
  };

  export type vehicleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: vehicleWhereInput | vehicleWhereInput[];
      OR?: vehicleWhereInput[];
      NOT?: vehicleWhereInput | vehicleWhereInput[];
      make?: StringFilter<'vehicle'> | string;
      model?: StringFilter<'vehicle'> | string;
      year?: IntFilter<'vehicle'> | number;
      color?: StringNullableFilter<'vehicle'> | string | null;
      vin?: StringFilter<'vehicle'> | string;
      price?: IntFilter<'vehicle'> | number;
      created_at?: DateTimeFilter<'vehicle'> | Date | string;
      updated_at?: DateTimeFilter<'vehicle'> | Date | string;
      loan?: LoanListRelationFilter;
    },
    'id'
  >;

  export type vehicleOrderByWithAggregationInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrderInput | SortOrder;
    vin?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: vehicleCountOrderByAggregateInput;
    _avg?: vehicleAvgOrderByAggregateInput;
    _max?: vehicleMaxOrderByAggregateInput;
    _min?: vehicleMinOrderByAggregateInput;
    _sum?: vehicleSumOrderByAggregateInput;
  };

  export type vehicleScalarWhereWithAggregatesInput = {
    AND?: vehicleScalarWhereWithAggregatesInput | vehicleScalarWhereWithAggregatesInput[];
    OR?: vehicleScalarWhereWithAggregatesInput[];
    NOT?: vehicleScalarWhereWithAggregatesInput | vehicleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'vehicle'> | string;
    make?: StringWithAggregatesFilter<'vehicle'> | string;
    model?: StringWithAggregatesFilter<'vehicle'> | string;
    year?: IntWithAggregatesFilter<'vehicle'> | number;
    color?: StringNullableWithAggregatesFilter<'vehicle'> | string | null;
    vin?: StringWithAggregatesFilter<'vehicle'> | string;
    price?: IntWithAggregatesFilter<'vehicle'> | number;
    created_at?: DateTimeWithAggregatesFilter<'vehicle'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'vehicle'> | Date | string;
  };

  export type finance_managerCreateInput = {
    id?: string;
    total_loans_managed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    loan: loanCreateNestedOneWithoutFinance_managerInput;
    user: userCreateNestedOneWithoutFinance_managerInput;
  };

  export type finance_managerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    loan_id: string;
    total_loans_managed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type finance_managerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_loans_managed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    loan?: loanUpdateOneRequiredWithoutFinance_managerNestedInput;
    user?: userUpdateOneRequiredWithoutFinance_managerNestedInput;
  };

  export type finance_managerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    loan_id?: StringFieldUpdateOperationsInput | string;
    total_loans_managed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type finance_managerCreateManyInput = {
    id?: string;
    user_id: string;
    loan_id: string;
    total_loans_managed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type finance_managerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_loans_managed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type finance_managerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    loan_id?: StringFieldUpdateOperationsInput | string;
    total_loans_managed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loanCreateInput = {
    id?: string;
    loan_amount: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
    loan_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerCreateNestedManyWithoutLoanInput;
    user: userCreateNestedOneWithoutLoanInput;
    vehicle: vehicleCreateNestedOneWithoutLoanInput;
    loan_officer?: loan_officerCreateNestedManyWithoutLoanInput;
  };

  export type loanUncheckedCreateInput = {
    id?: string;
    loan_amount: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
    loan_status: string;
    vehicle_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerUncheckedCreateNestedManyWithoutLoanInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutLoanInput;
  };

  export type loanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_term?: IntFieldUpdateOperationsInput | number;
    monthly_payment?: IntFieldUpdateOperationsInput | number;
    loan_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUpdateManyWithoutLoanNestedInput;
    user?: userUpdateOneRequiredWithoutLoanNestedInput;
    vehicle?: vehicleUpdateOneRequiredWithoutLoanNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_term?: IntFieldUpdateOperationsInput | number;
    monthly_payment?: IntFieldUpdateOperationsInput | number;
    loan_status?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUncheckedUpdateManyWithoutLoanNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutLoanNestedInput;
  };

  export type loanCreateManyInput = {
    id?: string;
    loan_amount: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
    loan_status: string;
    vehicle_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_term?: IntFieldUpdateOperationsInput | number;
    monthly_payment?: IntFieldUpdateOperationsInput | number;
    loan_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_term?: IntFieldUpdateOperationsInput | number;
    monthly_payment?: IntFieldUpdateOperationsInput | number;
    loan_status?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerCreateInput = {
    id?: string;
    total_loans_processed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    loan: loanCreateNestedOneWithoutLoan_officerInput;
    user: userCreateNestedOneWithoutLoan_officerInput;
  };

  export type loan_officerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    loan_id: string;
    total_loans_processed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_loans_processed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    loan?: loanUpdateOneRequiredWithoutLoan_officerNestedInput;
    user?: userUpdateOneRequiredWithoutLoan_officerNestedInput;
  };

  export type loan_officerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    loan_id?: StringFieldUpdateOperationsInput | string;
    total_loans_processed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerCreateManyInput = {
    id?: string;
    user_id: string;
    loan_id: string;
    total_loans_processed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_loans_processed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    loan_id?: StringFieldUpdateOperationsInput | string;
    total_loans_processed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerCreateNestedManyWithoutUserInput;
    loan?: loanCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerUncheckedCreateNestedManyWithoutUserInput;
    loan?: loanUncheckedCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUpdateManyWithoutUserNestedInput;
    loan?: loanUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUncheckedUpdateManyWithoutUserNestedInput;
    loan?: loanUncheckedUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicleCreateInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    vin: string;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    loan?: loanCreateNestedManyWithoutVehicleInput;
  };

  export type vehicleUncheckedCreateInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    vin: string;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    loan?: loanUncheckedCreateNestedManyWithoutVehicleInput;
  };

  export type vehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    vin?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    loan?: loanUpdateManyWithoutVehicleNestedInput;
  };

  export type vehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    vin?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    loan?: loanUncheckedUpdateManyWithoutVehicleNestedInput;
  };

  export type vehicleCreateManyInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    vin: string;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    vin?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    vin?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type LoanRelationFilter = {
    is?: loanWhereInput;
    isNot?: loanWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type finance_managerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    loan_id?: SortOrder;
    total_loans_managed?: SortOrder;
    total_loans_approved?: SortOrder;
    total_loans_rejected?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type finance_managerAvgOrderByAggregateInput = {
    total_loans_managed?: SortOrder;
    total_loans_approved?: SortOrder;
    total_loans_rejected?: SortOrder;
  };

  export type finance_managerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    loan_id?: SortOrder;
    total_loans_managed?: SortOrder;
    total_loans_approved?: SortOrder;
    total_loans_rejected?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type finance_managerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    loan_id?: SortOrder;
    total_loans_managed?: SortOrder;
    total_loans_approved?: SortOrder;
    total_loans_rejected?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type finance_managerSumOrderByAggregateInput = {
    total_loans_managed?: SortOrder;
    total_loans_approved?: SortOrder;
    total_loans_rejected?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type Finance_managerListRelationFilter = {
    every?: finance_managerWhereInput;
    some?: finance_managerWhereInput;
    none?: finance_managerWhereInput;
  };

  export type VehicleRelationFilter = {
    is?: vehicleWhereInput;
    isNot?: vehicleWhereInput;
  };

  export type Loan_officerListRelationFilter = {
    every?: loan_officerWhereInput;
    some?: loan_officerWhereInput;
    none?: loan_officerWhereInput;
  };

  export type finance_managerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type loan_officerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type loanCountOrderByAggregateInput = {
    id?: SortOrder;
    loan_amount?: SortOrder;
    interest_rate?: SortOrder;
    loan_term?: SortOrder;
    monthly_payment?: SortOrder;
    loan_status?: SortOrder;
    vehicle_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loanAvgOrderByAggregateInput = {
    loan_amount?: SortOrder;
    interest_rate?: SortOrder;
    loan_term?: SortOrder;
    monthly_payment?: SortOrder;
  };

  export type loanMaxOrderByAggregateInput = {
    id?: SortOrder;
    loan_amount?: SortOrder;
    interest_rate?: SortOrder;
    loan_term?: SortOrder;
    monthly_payment?: SortOrder;
    loan_status?: SortOrder;
    vehicle_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loanMinOrderByAggregateInput = {
    id?: SortOrder;
    loan_amount?: SortOrder;
    interest_rate?: SortOrder;
    loan_term?: SortOrder;
    monthly_payment?: SortOrder;
    loan_status?: SortOrder;
    vehicle_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loanSumOrderByAggregateInput = {
    loan_amount?: SortOrder;
    interest_rate?: SortOrder;
    loan_term?: SortOrder;
    monthly_payment?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type loan_officerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    loan_id?: SortOrder;
    total_loans_processed?: SortOrder;
    total_loans_approved?: SortOrder;
    total_loans_rejected?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loan_officerAvgOrderByAggregateInput = {
    total_loans_processed?: SortOrder;
    total_loans_approved?: SortOrder;
    total_loans_rejected?: SortOrder;
  };

  export type loan_officerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    loan_id?: SortOrder;
    total_loans_processed?: SortOrder;
    total_loans_approved?: SortOrder;
    total_loans_rejected?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loan_officerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    loan_id?: SortOrder;
    total_loans_processed?: SortOrder;
    total_loans_approved?: SortOrder;
    total_loans_rejected?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loan_officerSumOrderByAggregateInput = {
    total_loans_processed?: SortOrder;
    total_loans_approved?: SortOrder;
    total_loans_rejected?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type LoanListRelationFilter = {
    every?: loanWhereInput;
    some?: loanWhereInput;
    none?: loanWhereInput;
  };

  export type OrganizationNullableRelationFilter = {
    is?: organizationWhereInput | null;
    isNot?: organizationWhereInput | null;
  };

  export type loanOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type vehicleCountOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    vin?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicleAvgOrderByAggregateInput = {
    year?: SortOrder;
    price?: SortOrder;
  };

  export type vehicleMaxOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    vin?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicleMinOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    vin?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicleSumOrderByAggregateInput = {
    year?: SortOrder;
    price?: SortOrder;
  };

  export type loanCreateNestedOneWithoutFinance_managerInput = {
    create?: XOR<loanCreateWithoutFinance_managerInput, loanUncheckedCreateWithoutFinance_managerInput>;
    connectOrCreate?: loanCreateOrConnectWithoutFinance_managerInput;
    connect?: loanWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutFinance_managerInput = {
    create?: XOR<userCreateWithoutFinance_managerInput, userUncheckedCreateWithoutFinance_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutFinance_managerInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type loanUpdateOneRequiredWithoutFinance_managerNestedInput = {
    create?: XOR<loanCreateWithoutFinance_managerInput, loanUncheckedCreateWithoutFinance_managerInput>;
    connectOrCreate?: loanCreateOrConnectWithoutFinance_managerInput;
    upsert?: loanUpsertWithoutFinance_managerInput;
    connect?: loanWhereUniqueInput;
    update?: XOR<
      XOR<loanUpdateToOneWithWhereWithoutFinance_managerInput, loanUpdateWithoutFinance_managerInput>,
      loanUncheckedUpdateWithoutFinance_managerInput
    >;
  };

  export type userUpdateOneRequiredWithoutFinance_managerNestedInput = {
    create?: XOR<userCreateWithoutFinance_managerInput, userUncheckedCreateWithoutFinance_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutFinance_managerInput;
    upsert?: userUpsertWithoutFinance_managerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutFinance_managerInput, userUpdateWithoutFinance_managerInput>,
      userUncheckedUpdateWithoutFinance_managerInput
    >;
  };

  export type finance_managerCreateNestedManyWithoutLoanInput = {
    create?:
      | XOR<finance_managerCreateWithoutLoanInput, finance_managerUncheckedCreateWithoutLoanInput>
      | finance_managerCreateWithoutLoanInput[]
      | finance_managerUncheckedCreateWithoutLoanInput[];
    connectOrCreate?: finance_managerCreateOrConnectWithoutLoanInput | finance_managerCreateOrConnectWithoutLoanInput[];
    createMany?: finance_managerCreateManyLoanInputEnvelope;
    connect?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutLoanInput = {
    create?: XOR<userCreateWithoutLoanInput, userUncheckedCreateWithoutLoanInput>;
    connectOrCreate?: userCreateOrConnectWithoutLoanInput;
    connect?: userWhereUniqueInput;
  };

  export type vehicleCreateNestedOneWithoutLoanInput = {
    create?: XOR<vehicleCreateWithoutLoanInput, vehicleUncheckedCreateWithoutLoanInput>;
    connectOrCreate?: vehicleCreateOrConnectWithoutLoanInput;
    connect?: vehicleWhereUniqueInput;
  };

  export type loan_officerCreateNestedManyWithoutLoanInput = {
    create?:
      | XOR<loan_officerCreateWithoutLoanInput, loan_officerUncheckedCreateWithoutLoanInput>
      | loan_officerCreateWithoutLoanInput[]
      | loan_officerUncheckedCreateWithoutLoanInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutLoanInput | loan_officerCreateOrConnectWithoutLoanInput[];
    createMany?: loan_officerCreateManyLoanInputEnvelope;
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
  };

  export type finance_managerUncheckedCreateNestedManyWithoutLoanInput = {
    create?:
      | XOR<finance_managerCreateWithoutLoanInput, finance_managerUncheckedCreateWithoutLoanInput>
      | finance_managerCreateWithoutLoanInput[]
      | finance_managerUncheckedCreateWithoutLoanInput[];
    connectOrCreate?: finance_managerCreateOrConnectWithoutLoanInput | finance_managerCreateOrConnectWithoutLoanInput[];
    createMany?: finance_managerCreateManyLoanInputEnvelope;
    connect?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
  };

  export type loan_officerUncheckedCreateNestedManyWithoutLoanInput = {
    create?:
      | XOR<loan_officerCreateWithoutLoanInput, loan_officerUncheckedCreateWithoutLoanInput>
      | loan_officerCreateWithoutLoanInput[]
      | loan_officerUncheckedCreateWithoutLoanInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutLoanInput | loan_officerCreateOrConnectWithoutLoanInput[];
    createMany?: loan_officerCreateManyLoanInputEnvelope;
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type finance_managerUpdateManyWithoutLoanNestedInput = {
    create?:
      | XOR<finance_managerCreateWithoutLoanInput, finance_managerUncheckedCreateWithoutLoanInput>
      | finance_managerCreateWithoutLoanInput[]
      | finance_managerUncheckedCreateWithoutLoanInput[];
    connectOrCreate?: finance_managerCreateOrConnectWithoutLoanInput | finance_managerCreateOrConnectWithoutLoanInput[];
    upsert?:
      | finance_managerUpsertWithWhereUniqueWithoutLoanInput
      | finance_managerUpsertWithWhereUniqueWithoutLoanInput[];
    createMany?: finance_managerCreateManyLoanInputEnvelope;
    set?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    disconnect?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    delete?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    connect?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    update?:
      | finance_managerUpdateWithWhereUniqueWithoutLoanInput
      | finance_managerUpdateWithWhereUniqueWithoutLoanInput[];
    updateMany?:
      | finance_managerUpdateManyWithWhereWithoutLoanInput
      | finance_managerUpdateManyWithWhereWithoutLoanInput[];
    deleteMany?: finance_managerScalarWhereInput | finance_managerScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutLoanNestedInput = {
    create?: XOR<userCreateWithoutLoanInput, userUncheckedCreateWithoutLoanInput>;
    connectOrCreate?: userCreateOrConnectWithoutLoanInput;
    upsert?: userUpsertWithoutLoanInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutLoanInput, userUpdateWithoutLoanInput>,
      userUncheckedUpdateWithoutLoanInput
    >;
  };

  export type vehicleUpdateOneRequiredWithoutLoanNestedInput = {
    create?: XOR<vehicleCreateWithoutLoanInput, vehicleUncheckedCreateWithoutLoanInput>;
    connectOrCreate?: vehicleCreateOrConnectWithoutLoanInput;
    upsert?: vehicleUpsertWithoutLoanInput;
    connect?: vehicleWhereUniqueInput;
    update?: XOR<
      XOR<vehicleUpdateToOneWithWhereWithoutLoanInput, vehicleUpdateWithoutLoanInput>,
      vehicleUncheckedUpdateWithoutLoanInput
    >;
  };

  export type loan_officerUpdateManyWithoutLoanNestedInput = {
    create?:
      | XOR<loan_officerCreateWithoutLoanInput, loan_officerUncheckedCreateWithoutLoanInput>
      | loan_officerCreateWithoutLoanInput[]
      | loan_officerUncheckedCreateWithoutLoanInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutLoanInput | loan_officerCreateOrConnectWithoutLoanInput[];
    upsert?: loan_officerUpsertWithWhereUniqueWithoutLoanInput | loan_officerUpsertWithWhereUniqueWithoutLoanInput[];
    createMany?: loan_officerCreateManyLoanInputEnvelope;
    set?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    disconnect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    delete?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    update?: loan_officerUpdateWithWhereUniqueWithoutLoanInput | loan_officerUpdateWithWhereUniqueWithoutLoanInput[];
    updateMany?: loan_officerUpdateManyWithWhereWithoutLoanInput | loan_officerUpdateManyWithWhereWithoutLoanInput[];
    deleteMany?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
  };

  export type finance_managerUncheckedUpdateManyWithoutLoanNestedInput = {
    create?:
      | XOR<finance_managerCreateWithoutLoanInput, finance_managerUncheckedCreateWithoutLoanInput>
      | finance_managerCreateWithoutLoanInput[]
      | finance_managerUncheckedCreateWithoutLoanInput[];
    connectOrCreate?: finance_managerCreateOrConnectWithoutLoanInput | finance_managerCreateOrConnectWithoutLoanInput[];
    upsert?:
      | finance_managerUpsertWithWhereUniqueWithoutLoanInput
      | finance_managerUpsertWithWhereUniqueWithoutLoanInput[];
    createMany?: finance_managerCreateManyLoanInputEnvelope;
    set?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    disconnect?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    delete?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    connect?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    update?:
      | finance_managerUpdateWithWhereUniqueWithoutLoanInput
      | finance_managerUpdateWithWhereUniqueWithoutLoanInput[];
    updateMany?:
      | finance_managerUpdateManyWithWhereWithoutLoanInput
      | finance_managerUpdateManyWithWhereWithoutLoanInput[];
    deleteMany?: finance_managerScalarWhereInput | finance_managerScalarWhereInput[];
  };

  export type loan_officerUncheckedUpdateManyWithoutLoanNestedInput = {
    create?:
      | XOR<loan_officerCreateWithoutLoanInput, loan_officerUncheckedCreateWithoutLoanInput>
      | loan_officerCreateWithoutLoanInput[]
      | loan_officerUncheckedCreateWithoutLoanInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutLoanInput | loan_officerCreateOrConnectWithoutLoanInput[];
    upsert?: loan_officerUpsertWithWhereUniqueWithoutLoanInput | loan_officerUpsertWithWhereUniqueWithoutLoanInput[];
    createMany?: loan_officerCreateManyLoanInputEnvelope;
    set?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    disconnect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    delete?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    update?: loan_officerUpdateWithWhereUniqueWithoutLoanInput | loan_officerUpdateWithWhereUniqueWithoutLoanInput[];
    updateMany?: loan_officerUpdateManyWithWhereWithoutLoanInput | loan_officerUpdateManyWithWhereWithoutLoanInput[];
    deleteMany?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
  };

  export type loanCreateNestedOneWithoutLoan_officerInput = {
    create?: XOR<loanCreateWithoutLoan_officerInput, loanUncheckedCreateWithoutLoan_officerInput>;
    connectOrCreate?: loanCreateOrConnectWithoutLoan_officerInput;
    connect?: loanWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutLoan_officerInput = {
    create?: XOR<userCreateWithoutLoan_officerInput, userUncheckedCreateWithoutLoan_officerInput>;
    connectOrCreate?: userCreateOrConnectWithoutLoan_officerInput;
    connect?: userWhereUniqueInput;
  };

  export type loanUpdateOneRequiredWithoutLoan_officerNestedInput = {
    create?: XOR<loanCreateWithoutLoan_officerInput, loanUncheckedCreateWithoutLoan_officerInput>;
    connectOrCreate?: loanCreateOrConnectWithoutLoan_officerInput;
    upsert?: loanUpsertWithoutLoan_officerInput;
    connect?: loanWhereUniqueInput;
    update?: XOR<
      XOR<loanUpdateToOneWithWhereWithoutLoan_officerInput, loanUpdateWithoutLoan_officerInput>,
      loanUncheckedUpdateWithoutLoan_officerInput
    >;
  };

  export type userUpdateOneRequiredWithoutLoan_officerNestedInput = {
    create?: XOR<userCreateWithoutLoan_officerInput, userUncheckedCreateWithoutLoan_officerInput>;
    connectOrCreate?: userCreateOrConnectWithoutLoan_officerInput;
    upsert?: userUpsertWithoutLoan_officerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutLoan_officerInput, userUpdateWithoutLoan_officerInput>,
      userUncheckedUpdateWithoutLoan_officerInput
    >;
  };

  export type userCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    upsert?: userUpsertWithWhereUniqueWithoutOrganizationInput | userUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutOrganizationInput | userUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: userUpdateManyWithWhereWithoutOrganizationInput | userUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    upsert?: userUpsertWithWhereUniqueWithoutOrganizationInput | userUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutOrganizationInput | userUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: userUpdateManyWithWhereWithoutOrganizationInput | userUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type finance_managerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<finance_managerCreateWithoutUserInput, finance_managerUncheckedCreateWithoutUserInput>
      | finance_managerCreateWithoutUserInput[]
      | finance_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: finance_managerCreateOrConnectWithoutUserInput | finance_managerCreateOrConnectWithoutUserInput[];
    createMany?: finance_managerCreateManyUserInputEnvelope;
    connect?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
  };

  export type loanCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>
      | loanCreateWithoutUserInput[]
      | loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loanCreateOrConnectWithoutUserInput | loanCreateOrConnectWithoutUserInput[];
    createMany?: loanCreateManyUserInputEnvelope;
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
  };

  export type loan_officerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>
      | loan_officerCreateWithoutUserInput[]
      | loan_officerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutUserInput | loan_officerCreateOrConnectWithoutUserInput[];
    createMany?: loan_officerCreateManyUserInputEnvelope;
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
  };

  export type organizationCreateNestedOneWithoutUserInput = {
    create?: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput;
    connect?: organizationWhereUniqueInput;
  };

  export type finance_managerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<finance_managerCreateWithoutUserInput, finance_managerUncheckedCreateWithoutUserInput>
      | finance_managerCreateWithoutUserInput[]
      | finance_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: finance_managerCreateOrConnectWithoutUserInput | finance_managerCreateOrConnectWithoutUserInput[];
    createMany?: finance_managerCreateManyUserInputEnvelope;
    connect?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
  };

  export type loanUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>
      | loanCreateWithoutUserInput[]
      | loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loanCreateOrConnectWithoutUserInput | loanCreateOrConnectWithoutUserInput[];
    createMany?: loanCreateManyUserInputEnvelope;
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
  };

  export type loan_officerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>
      | loan_officerCreateWithoutUserInput[]
      | loan_officerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutUserInput | loan_officerCreateOrConnectWithoutUserInput[];
    createMany?: loan_officerCreateManyUserInputEnvelope;
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
  };

  export type finance_managerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<finance_managerCreateWithoutUserInput, finance_managerUncheckedCreateWithoutUserInput>
      | finance_managerCreateWithoutUserInput[]
      | finance_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: finance_managerCreateOrConnectWithoutUserInput | finance_managerCreateOrConnectWithoutUserInput[];
    upsert?:
      | finance_managerUpsertWithWhereUniqueWithoutUserInput
      | finance_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: finance_managerCreateManyUserInputEnvelope;
    set?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    disconnect?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    delete?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    connect?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    update?:
      | finance_managerUpdateWithWhereUniqueWithoutUserInput
      | finance_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | finance_managerUpdateManyWithWhereWithoutUserInput
      | finance_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: finance_managerScalarWhereInput | finance_managerScalarWhereInput[];
  };

  export type loanUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>
      | loanCreateWithoutUserInput[]
      | loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loanCreateOrConnectWithoutUserInput | loanCreateOrConnectWithoutUserInput[];
    upsert?: loanUpsertWithWhereUniqueWithoutUserInput | loanUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: loanCreateManyUserInputEnvelope;
    set?: loanWhereUniqueInput | loanWhereUniqueInput[];
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[];
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    update?: loanUpdateWithWhereUniqueWithoutUserInput | loanUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: loanUpdateManyWithWhereWithoutUserInput | loanUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[];
  };

  export type loan_officerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>
      | loan_officerCreateWithoutUserInput[]
      | loan_officerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutUserInput | loan_officerCreateOrConnectWithoutUserInput[];
    upsert?: loan_officerUpsertWithWhereUniqueWithoutUserInput | loan_officerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: loan_officerCreateManyUserInputEnvelope;
    set?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    disconnect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    delete?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    update?: loan_officerUpdateWithWhereUniqueWithoutUserInput | loan_officerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: loan_officerUpdateManyWithWhereWithoutUserInput | loan_officerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
  };

  export type organizationUpdateOneWithoutUserNestedInput = {
    create?: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput;
    upsert?: organizationUpsertWithoutUserInput;
    disconnect?: organizationWhereInput | boolean;
    delete?: organizationWhereInput | boolean;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutUserInput, organizationUpdateWithoutUserInput>,
      organizationUncheckedUpdateWithoutUserInput
    >;
  };

  export type finance_managerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<finance_managerCreateWithoutUserInput, finance_managerUncheckedCreateWithoutUserInput>
      | finance_managerCreateWithoutUserInput[]
      | finance_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: finance_managerCreateOrConnectWithoutUserInput | finance_managerCreateOrConnectWithoutUserInput[];
    upsert?:
      | finance_managerUpsertWithWhereUniqueWithoutUserInput
      | finance_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: finance_managerCreateManyUserInputEnvelope;
    set?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    disconnect?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    delete?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    connect?: finance_managerWhereUniqueInput | finance_managerWhereUniqueInput[];
    update?:
      | finance_managerUpdateWithWhereUniqueWithoutUserInput
      | finance_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | finance_managerUpdateManyWithWhereWithoutUserInput
      | finance_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: finance_managerScalarWhereInput | finance_managerScalarWhereInput[];
  };

  export type loanUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>
      | loanCreateWithoutUserInput[]
      | loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loanCreateOrConnectWithoutUserInput | loanCreateOrConnectWithoutUserInput[];
    upsert?: loanUpsertWithWhereUniqueWithoutUserInput | loanUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: loanCreateManyUserInputEnvelope;
    set?: loanWhereUniqueInput | loanWhereUniqueInput[];
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[];
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    update?: loanUpdateWithWhereUniqueWithoutUserInput | loanUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: loanUpdateManyWithWhereWithoutUserInput | loanUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[];
  };

  export type loan_officerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>
      | loan_officerCreateWithoutUserInput[]
      | loan_officerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutUserInput | loan_officerCreateOrConnectWithoutUserInput[];
    upsert?: loan_officerUpsertWithWhereUniqueWithoutUserInput | loan_officerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: loan_officerCreateManyUserInputEnvelope;
    set?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    disconnect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    delete?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    update?: loan_officerUpdateWithWhereUniqueWithoutUserInput | loan_officerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: loan_officerUpdateManyWithWhereWithoutUserInput | loan_officerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
  };

  export type loanCreateNestedManyWithoutVehicleInput = {
    create?:
      | XOR<loanCreateWithoutVehicleInput, loanUncheckedCreateWithoutVehicleInput>
      | loanCreateWithoutVehicleInput[]
      | loanUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: loanCreateOrConnectWithoutVehicleInput | loanCreateOrConnectWithoutVehicleInput[];
    createMany?: loanCreateManyVehicleInputEnvelope;
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
  };

  export type loanUncheckedCreateNestedManyWithoutVehicleInput = {
    create?:
      | XOR<loanCreateWithoutVehicleInput, loanUncheckedCreateWithoutVehicleInput>
      | loanCreateWithoutVehicleInput[]
      | loanUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: loanCreateOrConnectWithoutVehicleInput | loanCreateOrConnectWithoutVehicleInput[];
    createMany?: loanCreateManyVehicleInputEnvelope;
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
  };

  export type loanUpdateManyWithoutVehicleNestedInput = {
    create?:
      | XOR<loanCreateWithoutVehicleInput, loanUncheckedCreateWithoutVehicleInput>
      | loanCreateWithoutVehicleInput[]
      | loanUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: loanCreateOrConnectWithoutVehicleInput | loanCreateOrConnectWithoutVehicleInput[];
    upsert?: loanUpsertWithWhereUniqueWithoutVehicleInput | loanUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: loanCreateManyVehicleInputEnvelope;
    set?: loanWhereUniqueInput | loanWhereUniqueInput[];
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[];
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    update?: loanUpdateWithWhereUniqueWithoutVehicleInput | loanUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?: loanUpdateManyWithWhereWithoutVehicleInput | loanUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[];
  };

  export type loanUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?:
      | XOR<loanCreateWithoutVehicleInput, loanUncheckedCreateWithoutVehicleInput>
      | loanCreateWithoutVehicleInput[]
      | loanUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: loanCreateOrConnectWithoutVehicleInput | loanCreateOrConnectWithoutVehicleInput[];
    upsert?: loanUpsertWithWhereUniqueWithoutVehicleInput | loanUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: loanCreateManyVehicleInputEnvelope;
    set?: loanWhereUniqueInput | loanWhereUniqueInput[];
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[];
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    update?: loanUpdateWithWhereUniqueWithoutVehicleInput | loanUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?: loanUpdateManyWithWhereWithoutVehicleInput | loanUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type loanCreateWithoutFinance_managerInput = {
    id?: string;
    loan_amount: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
    loan_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutLoanInput;
    vehicle: vehicleCreateNestedOneWithoutLoanInput;
    loan_officer?: loan_officerCreateNestedManyWithoutLoanInput;
  };

  export type loanUncheckedCreateWithoutFinance_managerInput = {
    id?: string;
    loan_amount: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
    loan_status: string;
    vehicle_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutLoanInput;
  };

  export type loanCreateOrConnectWithoutFinance_managerInput = {
    where: loanWhereUniqueInput;
    create: XOR<loanCreateWithoutFinance_managerInput, loanUncheckedCreateWithoutFinance_managerInput>;
  };

  export type userCreateWithoutFinance_managerInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    loan?: loanCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutFinance_managerInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    loan?: loanUncheckedCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutFinance_managerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutFinance_managerInput, userUncheckedCreateWithoutFinance_managerInput>;
  };

  export type loanUpsertWithoutFinance_managerInput = {
    update: XOR<loanUpdateWithoutFinance_managerInput, loanUncheckedUpdateWithoutFinance_managerInput>;
    create: XOR<loanCreateWithoutFinance_managerInput, loanUncheckedCreateWithoutFinance_managerInput>;
    where?: loanWhereInput;
  };

  export type loanUpdateToOneWithWhereWithoutFinance_managerInput = {
    where?: loanWhereInput;
    data: XOR<loanUpdateWithoutFinance_managerInput, loanUncheckedUpdateWithoutFinance_managerInput>;
  };

  export type loanUpdateWithoutFinance_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_term?: IntFieldUpdateOperationsInput | number;
    monthly_payment?: IntFieldUpdateOperationsInput | number;
    loan_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutLoanNestedInput;
    vehicle?: vehicleUpdateOneRequiredWithoutLoanNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateWithoutFinance_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_term?: IntFieldUpdateOperationsInput | number;
    monthly_payment?: IntFieldUpdateOperationsInput | number;
    loan_status?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutLoanNestedInput;
  };

  export type userUpsertWithoutFinance_managerInput = {
    update: XOR<userUpdateWithoutFinance_managerInput, userUncheckedUpdateWithoutFinance_managerInput>;
    create: XOR<userCreateWithoutFinance_managerInput, userUncheckedCreateWithoutFinance_managerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutFinance_managerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutFinance_managerInput, userUncheckedUpdateWithoutFinance_managerInput>;
  };

  export type userUpdateWithoutFinance_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    loan?: loanUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutFinance_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    loan?: loanUncheckedUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type finance_managerCreateWithoutLoanInput = {
    id?: string;
    total_loans_managed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutFinance_managerInput;
  };

  export type finance_managerUncheckedCreateWithoutLoanInput = {
    id?: string;
    user_id: string;
    total_loans_managed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type finance_managerCreateOrConnectWithoutLoanInput = {
    where: finance_managerWhereUniqueInput;
    create: XOR<finance_managerCreateWithoutLoanInput, finance_managerUncheckedCreateWithoutLoanInput>;
  };

  export type finance_managerCreateManyLoanInputEnvelope = {
    data: finance_managerCreateManyLoanInput | finance_managerCreateManyLoanInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutLoanInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutLoanInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerUncheckedCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutLoanInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutLoanInput, userUncheckedCreateWithoutLoanInput>;
  };

  export type vehicleCreateWithoutLoanInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    vin: string;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicleUncheckedCreateWithoutLoanInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    vin: string;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicleCreateOrConnectWithoutLoanInput = {
    where: vehicleWhereUniqueInput;
    create: XOR<vehicleCreateWithoutLoanInput, vehicleUncheckedCreateWithoutLoanInput>;
  };

  export type loan_officerCreateWithoutLoanInput = {
    id?: string;
    total_loans_processed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutLoan_officerInput;
  };

  export type loan_officerUncheckedCreateWithoutLoanInput = {
    id?: string;
    user_id: string;
    total_loans_processed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerCreateOrConnectWithoutLoanInput = {
    where: loan_officerWhereUniqueInput;
    create: XOR<loan_officerCreateWithoutLoanInput, loan_officerUncheckedCreateWithoutLoanInput>;
  };

  export type loan_officerCreateManyLoanInputEnvelope = {
    data: loan_officerCreateManyLoanInput | loan_officerCreateManyLoanInput[];
    skipDuplicates?: boolean;
  };

  export type finance_managerUpsertWithWhereUniqueWithoutLoanInput = {
    where: finance_managerWhereUniqueInput;
    update: XOR<finance_managerUpdateWithoutLoanInput, finance_managerUncheckedUpdateWithoutLoanInput>;
    create: XOR<finance_managerCreateWithoutLoanInput, finance_managerUncheckedCreateWithoutLoanInput>;
  };

  export type finance_managerUpdateWithWhereUniqueWithoutLoanInput = {
    where: finance_managerWhereUniqueInput;
    data: XOR<finance_managerUpdateWithoutLoanInput, finance_managerUncheckedUpdateWithoutLoanInput>;
  };

  export type finance_managerUpdateManyWithWhereWithoutLoanInput = {
    where: finance_managerScalarWhereInput;
    data: XOR<finance_managerUpdateManyMutationInput, finance_managerUncheckedUpdateManyWithoutLoanInput>;
  };

  export type finance_managerScalarWhereInput = {
    AND?: finance_managerScalarWhereInput | finance_managerScalarWhereInput[];
    OR?: finance_managerScalarWhereInput[];
    NOT?: finance_managerScalarWhereInput | finance_managerScalarWhereInput[];
    id?: UuidFilter<'finance_manager'> | string;
    user_id?: UuidFilter<'finance_manager'> | string;
    loan_id?: UuidFilter<'finance_manager'> | string;
    total_loans_managed?: IntNullableFilter<'finance_manager'> | number | null;
    total_loans_approved?: IntNullableFilter<'finance_manager'> | number | null;
    total_loans_rejected?: IntNullableFilter<'finance_manager'> | number | null;
    created_at?: DateTimeFilter<'finance_manager'> | Date | string;
    updated_at?: DateTimeFilter<'finance_manager'> | Date | string;
  };

  export type userUpsertWithoutLoanInput = {
    update: XOR<userUpdateWithoutLoanInput, userUncheckedUpdateWithoutLoanInput>;
    create: XOR<userCreateWithoutLoanInput, userUncheckedCreateWithoutLoanInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutLoanInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutLoanInput, userUncheckedUpdateWithoutLoanInput>;
  };

  export type userUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUncheckedUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type vehicleUpsertWithoutLoanInput = {
    update: XOR<vehicleUpdateWithoutLoanInput, vehicleUncheckedUpdateWithoutLoanInput>;
    create: XOR<vehicleCreateWithoutLoanInput, vehicleUncheckedCreateWithoutLoanInput>;
    where?: vehicleWhereInput;
  };

  export type vehicleUpdateToOneWithWhereWithoutLoanInput = {
    where?: vehicleWhereInput;
    data: XOR<vehicleUpdateWithoutLoanInput, vehicleUncheckedUpdateWithoutLoanInput>;
  };

  export type vehicleUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    vin?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicleUncheckedUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    vin?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerUpsertWithWhereUniqueWithoutLoanInput = {
    where: loan_officerWhereUniqueInput;
    update: XOR<loan_officerUpdateWithoutLoanInput, loan_officerUncheckedUpdateWithoutLoanInput>;
    create: XOR<loan_officerCreateWithoutLoanInput, loan_officerUncheckedCreateWithoutLoanInput>;
  };

  export type loan_officerUpdateWithWhereUniqueWithoutLoanInput = {
    where: loan_officerWhereUniqueInput;
    data: XOR<loan_officerUpdateWithoutLoanInput, loan_officerUncheckedUpdateWithoutLoanInput>;
  };

  export type loan_officerUpdateManyWithWhereWithoutLoanInput = {
    where: loan_officerScalarWhereInput;
    data: XOR<loan_officerUpdateManyMutationInput, loan_officerUncheckedUpdateManyWithoutLoanInput>;
  };

  export type loan_officerScalarWhereInput = {
    AND?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
    OR?: loan_officerScalarWhereInput[];
    NOT?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
    id?: UuidFilter<'loan_officer'> | string;
    user_id?: UuidFilter<'loan_officer'> | string;
    loan_id?: UuidFilter<'loan_officer'> | string;
    total_loans_processed?: IntNullableFilter<'loan_officer'> | number | null;
    total_loans_approved?: IntNullableFilter<'loan_officer'> | number | null;
    total_loans_rejected?: IntNullableFilter<'loan_officer'> | number | null;
    created_at?: DateTimeFilter<'loan_officer'> | Date | string;
    updated_at?: DateTimeFilter<'loan_officer'> | Date | string;
  };

  export type loanCreateWithoutLoan_officerInput = {
    id?: string;
    loan_amount: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
    loan_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerCreateNestedManyWithoutLoanInput;
    user: userCreateNestedOneWithoutLoanInput;
    vehicle: vehicleCreateNestedOneWithoutLoanInput;
  };

  export type loanUncheckedCreateWithoutLoan_officerInput = {
    id?: string;
    loan_amount: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
    loan_status: string;
    vehicle_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerUncheckedCreateNestedManyWithoutLoanInput;
  };

  export type loanCreateOrConnectWithoutLoan_officerInput = {
    where: loanWhereUniqueInput;
    create: XOR<loanCreateWithoutLoan_officerInput, loanUncheckedCreateWithoutLoan_officerInput>;
  };

  export type userCreateWithoutLoan_officerInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerCreateNestedManyWithoutUserInput;
    loan?: loanCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutLoan_officerInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerUncheckedCreateNestedManyWithoutUserInput;
    loan?: loanUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutLoan_officerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutLoan_officerInput, userUncheckedCreateWithoutLoan_officerInput>;
  };

  export type loanUpsertWithoutLoan_officerInput = {
    update: XOR<loanUpdateWithoutLoan_officerInput, loanUncheckedUpdateWithoutLoan_officerInput>;
    create: XOR<loanCreateWithoutLoan_officerInput, loanUncheckedCreateWithoutLoan_officerInput>;
    where?: loanWhereInput;
  };

  export type loanUpdateToOneWithWhereWithoutLoan_officerInput = {
    where?: loanWhereInput;
    data: XOR<loanUpdateWithoutLoan_officerInput, loanUncheckedUpdateWithoutLoan_officerInput>;
  };

  export type loanUpdateWithoutLoan_officerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_term?: IntFieldUpdateOperationsInput | number;
    monthly_payment?: IntFieldUpdateOperationsInput | number;
    loan_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUpdateManyWithoutLoanNestedInput;
    user?: userUpdateOneRequiredWithoutLoanNestedInput;
    vehicle?: vehicleUpdateOneRequiredWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateWithoutLoan_officerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_term?: IntFieldUpdateOperationsInput | number;
    monthly_payment?: IntFieldUpdateOperationsInput | number;
    loan_status?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUncheckedUpdateManyWithoutLoanNestedInput;
  };

  export type userUpsertWithoutLoan_officerInput = {
    update: XOR<userUpdateWithoutLoan_officerInput, userUncheckedUpdateWithoutLoan_officerInput>;
    create: XOR<userCreateWithoutLoan_officerInput, userUncheckedCreateWithoutLoan_officerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutLoan_officerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutLoan_officerInput, userUncheckedUpdateWithoutLoan_officerInput>;
  };

  export type userUpdateWithoutLoan_officerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUpdateManyWithoutUserNestedInput;
    loan?: loanUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutLoan_officerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUncheckedUpdateManyWithoutUserNestedInput;
    loan?: loanUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerCreateNestedManyWithoutUserInput;
    loan?: loanCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerUncheckedCreateNestedManyWithoutUserInput;
    loan?: loanUncheckedCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type userCreateManyOrganizationInputEnvelope = {
    data: userCreateManyOrganizationInput | userCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type userUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateManyWithWhereWithoutOrganizationInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    organization_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type finance_managerCreateWithoutUserInput = {
    id?: string;
    total_loans_managed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    loan: loanCreateNestedOneWithoutFinance_managerInput;
  };

  export type finance_managerUncheckedCreateWithoutUserInput = {
    id?: string;
    loan_id: string;
    total_loans_managed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type finance_managerCreateOrConnectWithoutUserInput = {
    where: finance_managerWhereUniqueInput;
    create: XOR<finance_managerCreateWithoutUserInput, finance_managerUncheckedCreateWithoutUserInput>;
  };

  export type finance_managerCreateManyUserInputEnvelope = {
    data: finance_managerCreateManyUserInput | finance_managerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type loanCreateWithoutUserInput = {
    id?: string;
    loan_amount: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
    loan_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerCreateNestedManyWithoutLoanInput;
    vehicle: vehicleCreateNestedOneWithoutLoanInput;
    loan_officer?: loan_officerCreateNestedManyWithoutLoanInput;
  };

  export type loanUncheckedCreateWithoutUserInput = {
    id?: string;
    loan_amount: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
    loan_status: string;
    vehicle_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerUncheckedCreateNestedManyWithoutLoanInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutLoanInput;
  };

  export type loanCreateOrConnectWithoutUserInput = {
    where: loanWhereUniqueInput;
    create: XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>;
  };

  export type loanCreateManyUserInputEnvelope = {
    data: loanCreateManyUserInput | loanCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type loan_officerCreateWithoutUserInput = {
    id?: string;
    total_loans_processed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    loan: loanCreateNestedOneWithoutLoan_officerInput;
  };

  export type loan_officerUncheckedCreateWithoutUserInput = {
    id?: string;
    loan_id: string;
    total_loans_processed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerCreateOrConnectWithoutUserInput = {
    where: loan_officerWhereUniqueInput;
    create: XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>;
  };

  export type loan_officerCreateManyUserInputEnvelope = {
    data: loan_officerCreateManyUserInput | loan_officerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type finance_managerUpsertWithWhereUniqueWithoutUserInput = {
    where: finance_managerWhereUniqueInput;
    update: XOR<finance_managerUpdateWithoutUserInput, finance_managerUncheckedUpdateWithoutUserInput>;
    create: XOR<finance_managerCreateWithoutUserInput, finance_managerUncheckedCreateWithoutUserInput>;
  };

  export type finance_managerUpdateWithWhereUniqueWithoutUserInput = {
    where: finance_managerWhereUniqueInput;
    data: XOR<finance_managerUpdateWithoutUserInput, finance_managerUncheckedUpdateWithoutUserInput>;
  };

  export type finance_managerUpdateManyWithWhereWithoutUserInput = {
    where: finance_managerScalarWhereInput;
    data: XOR<finance_managerUpdateManyMutationInput, finance_managerUncheckedUpdateManyWithoutUserInput>;
  };

  export type loanUpsertWithWhereUniqueWithoutUserInput = {
    where: loanWhereUniqueInput;
    update: XOR<loanUpdateWithoutUserInput, loanUncheckedUpdateWithoutUserInput>;
    create: XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>;
  };

  export type loanUpdateWithWhereUniqueWithoutUserInput = {
    where: loanWhereUniqueInput;
    data: XOR<loanUpdateWithoutUserInput, loanUncheckedUpdateWithoutUserInput>;
  };

  export type loanUpdateManyWithWhereWithoutUserInput = {
    where: loanScalarWhereInput;
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyWithoutUserInput>;
  };

  export type loanScalarWhereInput = {
    AND?: loanScalarWhereInput | loanScalarWhereInput[];
    OR?: loanScalarWhereInput[];
    NOT?: loanScalarWhereInput | loanScalarWhereInput[];
    id?: UuidFilter<'loan'> | string;
    loan_amount?: IntFilter<'loan'> | number;
    interest_rate?: IntFilter<'loan'> | number;
    loan_term?: IntFilter<'loan'> | number;
    monthly_payment?: IntFilter<'loan'> | number;
    loan_status?: StringFilter<'loan'> | string;
    vehicle_id?: UuidFilter<'loan'> | string;
    user_id?: UuidFilter<'loan'> | string;
    created_at?: DateTimeFilter<'loan'> | Date | string;
    updated_at?: DateTimeFilter<'loan'> | Date | string;
  };

  export type loan_officerUpsertWithWhereUniqueWithoutUserInput = {
    where: loan_officerWhereUniqueInput;
    update: XOR<loan_officerUpdateWithoutUserInput, loan_officerUncheckedUpdateWithoutUserInput>;
    create: XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>;
  };

  export type loan_officerUpdateWithWhereUniqueWithoutUserInput = {
    where: loan_officerWhereUniqueInput;
    data: XOR<loan_officerUpdateWithoutUserInput, loan_officerUncheckedUpdateWithoutUserInput>;
  };

  export type loan_officerUpdateManyWithWhereWithoutUserInput = {
    where: loan_officerScalarWhereInput;
    data: XOR<loan_officerUpdateManyMutationInput, loan_officerUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationUpsertWithoutUserInput = {
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutUserInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loanCreateWithoutVehicleInput = {
    id?: string;
    loan_amount: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
    loan_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerCreateNestedManyWithoutLoanInput;
    user: userCreateNestedOneWithoutLoanInput;
    loan_officer?: loan_officerCreateNestedManyWithoutLoanInput;
  };

  export type loanUncheckedCreateWithoutVehicleInput = {
    id?: string;
    loan_amount: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
    loan_status: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_manager?: finance_managerUncheckedCreateNestedManyWithoutLoanInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutLoanInput;
  };

  export type loanCreateOrConnectWithoutVehicleInput = {
    where: loanWhereUniqueInput;
    create: XOR<loanCreateWithoutVehicleInput, loanUncheckedCreateWithoutVehicleInput>;
  };

  export type loanCreateManyVehicleInputEnvelope = {
    data: loanCreateManyVehicleInput | loanCreateManyVehicleInput[];
    skipDuplicates?: boolean;
  };

  export type loanUpsertWithWhereUniqueWithoutVehicleInput = {
    where: loanWhereUniqueInput;
    update: XOR<loanUpdateWithoutVehicleInput, loanUncheckedUpdateWithoutVehicleInput>;
    create: XOR<loanCreateWithoutVehicleInput, loanUncheckedCreateWithoutVehicleInput>;
  };

  export type loanUpdateWithWhereUniqueWithoutVehicleInput = {
    where: loanWhereUniqueInput;
    data: XOR<loanUpdateWithoutVehicleInput, loanUncheckedUpdateWithoutVehicleInput>;
  };

  export type loanUpdateManyWithWhereWithoutVehicleInput = {
    where: loanScalarWhereInput;
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyWithoutVehicleInput>;
  };

  export type finance_managerCreateManyLoanInput = {
    id?: string;
    user_id: string;
    total_loans_managed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerCreateManyLoanInput = {
    id?: string;
    user_id: string;
    total_loans_processed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type finance_managerUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_loans_managed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutFinance_managerNestedInput;
  };

  export type finance_managerUncheckedUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    total_loans_managed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type finance_managerUncheckedUpdateManyWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    total_loans_managed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_loans_processed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutLoan_officerNestedInput;
  };

  export type loan_officerUncheckedUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    total_loans_processed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerUncheckedUpdateManyWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    total_loans_processed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyOrganizationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUpdateManyWithoutUserNestedInput;
    loan?: loanUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUncheckedUpdateManyWithoutUserNestedInput;
    loan?: loanUncheckedUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type finance_managerCreateManyUserInput = {
    id?: string;
    loan_id: string;
    total_loans_managed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loanCreateManyUserInput = {
    id?: string;
    loan_amount: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
    loan_status: string;
    vehicle_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerCreateManyUserInput = {
    id?: string;
    loan_id: string;
    total_loans_processed?: number | null;
    total_loans_approved?: number | null;
    total_loans_rejected?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type finance_managerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_loans_managed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    loan?: loanUpdateOneRequiredWithoutFinance_managerNestedInput;
  };

  export type finance_managerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_id?: StringFieldUpdateOperationsInput | string;
    total_loans_managed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type finance_managerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_id?: StringFieldUpdateOperationsInput | string;
    total_loans_managed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_term?: IntFieldUpdateOperationsInput | number;
    monthly_payment?: IntFieldUpdateOperationsInput | number;
    loan_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUpdateManyWithoutLoanNestedInput;
    vehicle?: vehicleUpdateOneRequiredWithoutLoanNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_term?: IntFieldUpdateOperationsInput | number;
    monthly_payment?: IntFieldUpdateOperationsInput | number;
    loan_status?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUncheckedUpdateManyWithoutLoanNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_term?: IntFieldUpdateOperationsInput | number;
    monthly_payment?: IntFieldUpdateOperationsInput | number;
    loan_status?: StringFieldUpdateOperationsInput | string;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    total_loans_processed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    loan?: loanUpdateOneRequiredWithoutLoan_officerNestedInput;
  };

  export type loan_officerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_id?: StringFieldUpdateOperationsInput | string;
    total_loans_processed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_id?: StringFieldUpdateOperationsInput | string;
    total_loans_processed?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_approved?: NullableIntFieldUpdateOperationsInput | number | null;
    total_loans_rejected?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loanCreateManyVehicleInput = {
    id?: string;
    loan_amount: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
    loan_status: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loanUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_term?: IntFieldUpdateOperationsInput | number;
    monthly_payment?: IntFieldUpdateOperationsInput | number;
    loan_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUpdateManyWithoutLoanNestedInput;
    user?: userUpdateOneRequiredWithoutLoanNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_term?: IntFieldUpdateOperationsInput | number;
    monthly_payment?: IntFieldUpdateOperationsInput | number;
    loan_status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_manager?: finance_managerUncheckedUpdateManyWithoutLoanNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_term?: IntFieldUpdateOperationsInput | number;
    monthly_payment?: IntFieldUpdateOperationsInput | number;
    loan_status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use LoanCountOutputTypeDefaultArgs instead
   */
  export type LoanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    LoanCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use VehicleCountOutputTypeDefaultArgs instead
   */
  export type VehicleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    VehicleCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use finance_managerDefaultArgs instead
   */
  export type finance_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    finance_managerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use loanDefaultArgs instead
   */
  export type loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = loanDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use loan_officerDefaultArgs instead
   */
  export type loan_officerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    loan_officerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use vehicleDefaultArgs instead
   */
  export type vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    vehicleDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
