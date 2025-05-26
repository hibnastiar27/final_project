
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model destinations
 * 
 */
export type destinations = $Result.DefaultSelection<Prisma.$destinationsPayload>
/**
 * Model kuliners
 * 
 */
export type kuliners = $Result.DefaultSelection<Prisma.$kulinersPayload>
/**
 * Model rekomendasi_destinasi
 * 
 */
export type rekomendasi_destinasi = $Result.DefaultSelection<Prisma.$rekomendasi_destinasiPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Destinations
 * const destinations = await prisma.destinations.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Destinations
   * const destinations = await prisma.destinations.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.destinations`: Exposes CRUD operations for the **destinations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinations
    * const destinations = await prisma.destinations.findMany()
    * ```
    */
  get destinations(): Prisma.destinationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kuliners`: Exposes CRUD operations for the **kuliners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kuliners
    * const kuliners = await prisma.kuliners.findMany()
    * ```
    */
  get kuliners(): Prisma.kulinersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rekomendasi_destinasi`: Exposes CRUD operations for the **rekomendasi_destinasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rekomendasi_destinasis
    * const rekomendasi_destinasis = await prisma.rekomendasi_destinasi.findMany()
    * ```
    */
  get rekomendasi_destinasi(): Prisma.rekomendasi_destinasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    destinations: 'destinations',
    kuliners: 'kuliners',
    rekomendasi_destinasi: 'rekomendasi_destinasi',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "destinations" | "kuliners" | "rekomendasi_destinasi" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      destinations: {
        payload: Prisma.$destinationsPayload<ExtArgs>
        fields: Prisma.destinationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.destinationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.destinationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>
          }
          findFirst: {
            args: Prisma.destinationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.destinationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>
          }
          findMany: {
            args: Prisma.destinationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>[]
          }
          create: {
            args: Prisma.destinationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>
          }
          createMany: {
            args: Prisma.destinationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.destinationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>[]
          }
          delete: {
            args: Prisma.destinationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>
          }
          update: {
            args: Prisma.destinationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>
          }
          deleteMany: {
            args: Prisma.destinationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.destinationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.destinationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>[]
          }
          upsert: {
            args: Prisma.destinationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>
          }
          aggregate: {
            args: Prisma.DestinationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestinations>
          }
          groupBy: {
            args: Prisma.destinationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.destinationsCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationsCountAggregateOutputType> | number
          }
        }
      }
      kuliners: {
        payload: Prisma.$kulinersPayload<ExtArgs>
        fields: Prisma.kulinersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kulinersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kulinersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kulinersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kulinersPayload>
          }
          findFirst: {
            args: Prisma.kulinersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kulinersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kulinersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kulinersPayload>
          }
          findMany: {
            args: Prisma.kulinersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kulinersPayload>[]
          }
          create: {
            args: Prisma.kulinersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kulinersPayload>
          }
          createMany: {
            args: Prisma.kulinersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.kulinersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kulinersPayload>[]
          }
          delete: {
            args: Prisma.kulinersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kulinersPayload>
          }
          update: {
            args: Prisma.kulinersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kulinersPayload>
          }
          deleteMany: {
            args: Prisma.kulinersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kulinersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.kulinersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kulinersPayload>[]
          }
          upsert: {
            args: Prisma.kulinersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kulinersPayload>
          }
          aggregate: {
            args: Prisma.KulinersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKuliners>
          }
          groupBy: {
            args: Prisma.kulinersGroupByArgs<ExtArgs>
            result: $Utils.Optional<KulinersGroupByOutputType>[]
          }
          count: {
            args: Prisma.kulinersCountArgs<ExtArgs>
            result: $Utils.Optional<KulinersCountAggregateOutputType> | number
          }
        }
      }
      rekomendasi_destinasi: {
        payload: Prisma.$rekomendasi_destinasiPayload<ExtArgs>
        fields: Prisma.rekomendasi_destinasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rekomendasi_destinasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekomendasi_destinasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rekomendasi_destinasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekomendasi_destinasiPayload>
          }
          findFirst: {
            args: Prisma.rekomendasi_destinasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekomendasi_destinasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rekomendasi_destinasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekomendasi_destinasiPayload>
          }
          findMany: {
            args: Prisma.rekomendasi_destinasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekomendasi_destinasiPayload>[]
          }
          create: {
            args: Prisma.rekomendasi_destinasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekomendasi_destinasiPayload>
          }
          createMany: {
            args: Prisma.rekomendasi_destinasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rekomendasi_destinasiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekomendasi_destinasiPayload>[]
          }
          delete: {
            args: Prisma.rekomendasi_destinasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekomendasi_destinasiPayload>
          }
          update: {
            args: Prisma.rekomendasi_destinasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekomendasi_destinasiPayload>
          }
          deleteMany: {
            args: Prisma.rekomendasi_destinasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rekomendasi_destinasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rekomendasi_destinasiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekomendasi_destinasiPayload>[]
          }
          upsert: {
            args: Prisma.rekomendasi_destinasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekomendasi_destinasiPayload>
          }
          aggregate: {
            args: Prisma.Rekomendasi_destinasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRekomendasi_destinasi>
          }
          groupBy: {
            args: Prisma.rekomendasi_destinasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rekomendasi_destinasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.rekomendasi_destinasiCountArgs<ExtArgs>
            result: $Utils.Optional<Rekomendasi_destinasiCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    destinations?: destinationsOmit
    kuliners?: kulinersOmit
    rekomendasi_destinasi?: rekomendasi_destinasiOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    rekomendasi_destinasi: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekomendasi_destinasi?: boolean | UsersCountOutputTypeCountRekomendasi_destinasiArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRekomendasi_destinasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rekomendasi_destinasiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model destinations
   */

  export type AggregateDestinations = {
    _count: DestinationsCountAggregateOutputType | null
    _avg: DestinationsAvgAggregateOutputType | null
    _sum: DestinationsSumAggregateOutputType | null
    _min: DestinationsMinAggregateOutputType | null
    _max: DestinationsMaxAggregateOutputType | null
  }

  export type DestinationsAvgAggregateOutputType = {
    id: number | null
    rating: Decimal | null
    latitutde: Decimal | null
    longtitude: Decimal | null
  }

  export type DestinationsSumAggregateOutputType = {
    id: number | null
    rating: Decimal | null
    latitutde: Decimal | null
    longtitude: Decimal | null
  }

  export type DestinationsMinAggregateOutputType = {
    id: number | null
    url_maps: string | null
    name: string | null
    rating: Decimal | null
    tipe: string | null
    url_gambar: string | null
    provinsi: string | null
    latitutde: Decimal | null
    longtitude: Decimal | null
    kategori: string | null
    created_at: Date | null
  }

  export type DestinationsMaxAggregateOutputType = {
    id: number | null
    url_maps: string | null
    name: string | null
    rating: Decimal | null
    tipe: string | null
    url_gambar: string | null
    provinsi: string | null
    latitutde: Decimal | null
    longtitude: Decimal | null
    kategori: string | null
    created_at: Date | null
  }

  export type DestinationsCountAggregateOutputType = {
    id: number
    url_maps: number
    name: number
    rating: number
    tipe: number
    url_gambar: number
    provinsi: number
    latitutde: number
    longtitude: number
    kategori: number
    created_at: number
    _all: number
  }


  export type DestinationsAvgAggregateInputType = {
    id?: true
    rating?: true
    latitutde?: true
    longtitude?: true
  }

  export type DestinationsSumAggregateInputType = {
    id?: true
    rating?: true
    latitutde?: true
    longtitude?: true
  }

  export type DestinationsMinAggregateInputType = {
    id?: true
    url_maps?: true
    name?: true
    rating?: true
    tipe?: true
    url_gambar?: true
    provinsi?: true
    latitutde?: true
    longtitude?: true
    kategori?: true
    created_at?: true
  }

  export type DestinationsMaxAggregateInputType = {
    id?: true
    url_maps?: true
    name?: true
    rating?: true
    tipe?: true
    url_gambar?: true
    provinsi?: true
    latitutde?: true
    longtitude?: true
    kategori?: true
    created_at?: true
  }

  export type DestinationsCountAggregateInputType = {
    id?: true
    url_maps?: true
    name?: true
    rating?: true
    tipe?: true
    url_gambar?: true
    provinsi?: true
    latitutde?: true
    longtitude?: true
    kategori?: true
    created_at?: true
    _all?: true
  }

  export type DestinationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which destinations to aggregate.
     */
    where?: destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinations to fetch.
     */
    orderBy?: destinationsOrderByWithRelationInput | destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned destinations
    **/
    _count?: true | DestinationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DestinationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DestinationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationsMaxAggregateInputType
  }

  export type GetDestinationsAggregateType<T extends DestinationsAggregateArgs> = {
        [P in keyof T & keyof AggregateDestinations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestinations[P]>
      : GetScalarType<T[P], AggregateDestinations[P]>
  }




  export type destinationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: destinationsWhereInput
    orderBy?: destinationsOrderByWithAggregationInput | destinationsOrderByWithAggregationInput[]
    by: DestinationsScalarFieldEnum[] | DestinationsScalarFieldEnum
    having?: destinationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationsCountAggregateInputType | true
    _avg?: DestinationsAvgAggregateInputType
    _sum?: DestinationsSumAggregateInputType
    _min?: DestinationsMinAggregateInputType
    _max?: DestinationsMaxAggregateInputType
  }

  export type DestinationsGroupByOutputType = {
    id: number
    url_maps: string | null
    name: string | null
    rating: Decimal | null
    tipe: string | null
    url_gambar: string | null
    provinsi: string | null
    latitutde: Decimal | null
    longtitude: Decimal | null
    kategori: string | null
    created_at: Date
    _count: DestinationsCountAggregateOutputType | null
    _avg: DestinationsAvgAggregateOutputType | null
    _sum: DestinationsSumAggregateOutputType | null
    _min: DestinationsMinAggregateOutputType | null
    _max: DestinationsMaxAggregateOutputType | null
  }

  type GetDestinationsGroupByPayload<T extends destinationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationsGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationsGroupByOutputType[P]>
        }
      >
    >


  export type destinationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_maps?: boolean
    name?: boolean
    rating?: boolean
    tipe?: boolean
    url_gambar?: boolean
    provinsi?: boolean
    latitutde?: boolean
    longtitude?: boolean
    kategori?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["destinations"]>

  export type destinationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_maps?: boolean
    name?: boolean
    rating?: boolean
    tipe?: boolean
    url_gambar?: boolean
    provinsi?: boolean
    latitutde?: boolean
    longtitude?: boolean
    kategori?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["destinations"]>

  export type destinationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_maps?: boolean
    name?: boolean
    rating?: boolean
    tipe?: boolean
    url_gambar?: boolean
    provinsi?: boolean
    latitutde?: boolean
    longtitude?: boolean
    kategori?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["destinations"]>

  export type destinationsSelectScalar = {
    id?: boolean
    url_maps?: boolean
    name?: boolean
    rating?: boolean
    tipe?: boolean
    url_gambar?: boolean
    provinsi?: boolean
    latitutde?: boolean
    longtitude?: boolean
    kategori?: boolean
    created_at?: boolean
  }

  export type destinationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url_maps" | "name" | "rating" | "tipe" | "url_gambar" | "provinsi" | "latitutde" | "longtitude" | "kategori" | "created_at", ExtArgs["result"]["destinations"]>

  export type $destinationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "destinations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url_maps: string | null
      name: string | null
      rating: Prisma.Decimal | null
      tipe: string | null
      url_gambar: string | null
      provinsi: string | null
      latitutde: Prisma.Decimal | null
      longtitude: Prisma.Decimal | null
      kategori: string | null
      created_at: Date
    }, ExtArgs["result"]["destinations"]>
    composites: {}
  }

  type destinationsGetPayload<S extends boolean | null | undefined | destinationsDefaultArgs> = $Result.GetResult<Prisma.$destinationsPayload, S>

  type destinationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<destinationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationsCountAggregateInputType | true
    }

  export interface destinationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['destinations'], meta: { name: 'destinations' } }
    /**
     * Find zero or one Destinations that matches the filter.
     * @param {destinationsFindUniqueArgs} args - Arguments to find a Destinations
     * @example
     * // Get one Destinations
     * const destinations = await prisma.destinations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends destinationsFindUniqueArgs>(args: SelectSubset<T, destinationsFindUniqueArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Destinations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {destinationsFindUniqueOrThrowArgs} args - Arguments to find a Destinations
     * @example
     * // Get one Destinations
     * const destinations = await prisma.destinations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends destinationsFindUniqueOrThrowArgs>(args: SelectSubset<T, destinationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinationsFindFirstArgs} args - Arguments to find a Destinations
     * @example
     * // Get one Destinations
     * const destinations = await prisma.destinations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends destinationsFindFirstArgs>(args?: SelectSubset<T, destinationsFindFirstArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destinations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinationsFindFirstOrThrowArgs} args - Arguments to find a Destinations
     * @example
     * // Get one Destinations
     * const destinations = await prisma.destinations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends destinationsFindFirstOrThrowArgs>(args?: SelectSubset<T, destinationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinations
     * const destinations = await prisma.destinations.findMany()
     * 
     * // Get first 10 Destinations
     * const destinations = await prisma.destinations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationsWithIdOnly = await prisma.destinations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends destinationsFindManyArgs>(args?: SelectSubset<T, destinationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Destinations.
     * @param {destinationsCreateArgs} args - Arguments to create a Destinations.
     * @example
     * // Create one Destinations
     * const Destinations = await prisma.destinations.create({
     *   data: {
     *     // ... data to create a Destinations
     *   }
     * })
     * 
     */
    create<T extends destinationsCreateArgs>(args: SelectSubset<T, destinationsCreateArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Destinations.
     * @param {destinationsCreateManyArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destinations = await prisma.destinations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends destinationsCreateManyArgs>(args?: SelectSubset<T, destinationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Destinations and returns the data saved in the database.
     * @param {destinationsCreateManyAndReturnArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destinations = await prisma.destinations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Destinations and only return the `id`
     * const destinationsWithIdOnly = await prisma.destinations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends destinationsCreateManyAndReturnArgs>(args?: SelectSubset<T, destinationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Destinations.
     * @param {destinationsDeleteArgs} args - Arguments to delete one Destinations.
     * @example
     * // Delete one Destinations
     * const Destinations = await prisma.destinations.delete({
     *   where: {
     *     // ... filter to delete one Destinations
     *   }
     * })
     * 
     */
    delete<T extends destinationsDeleteArgs>(args: SelectSubset<T, destinationsDeleteArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Destinations.
     * @param {destinationsUpdateArgs} args - Arguments to update one Destinations.
     * @example
     * // Update one Destinations
     * const destinations = await prisma.destinations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends destinationsUpdateArgs>(args: SelectSubset<T, destinationsUpdateArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Destinations.
     * @param {destinationsDeleteManyArgs} args - Arguments to filter Destinations to delete.
     * @example
     * // Delete a few Destinations
     * const { count } = await prisma.destinations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends destinationsDeleteManyArgs>(args?: SelectSubset<T, destinationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinations
     * const destinations = await prisma.destinations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends destinationsUpdateManyArgs>(args: SelectSubset<T, destinationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations and returns the data updated in the database.
     * @param {destinationsUpdateManyAndReturnArgs} args - Arguments to update many Destinations.
     * @example
     * // Update many Destinations
     * const destinations = await prisma.destinations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Destinations and only return the `id`
     * const destinationsWithIdOnly = await prisma.destinations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends destinationsUpdateManyAndReturnArgs>(args: SelectSubset<T, destinationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Destinations.
     * @param {destinationsUpsertArgs} args - Arguments to update or create a Destinations.
     * @example
     * // Update or create a Destinations
     * const destinations = await prisma.destinations.upsert({
     *   create: {
     *     // ... data to create a Destinations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destinations we want to update
     *   }
     * })
     */
    upsert<T extends destinationsUpsertArgs>(args: SelectSubset<T, destinationsUpsertArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinationsCountArgs} args - Arguments to filter Destinations to count.
     * @example
     * // Count the number of Destinations
     * const count = await prisma.destinations.count({
     *   where: {
     *     // ... the filter for the Destinations we want to count
     *   }
     * })
    **/
    count<T extends destinationsCountArgs>(
      args?: Subset<T, destinationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DestinationsAggregateArgs>(args: Subset<T, DestinationsAggregateArgs>): Prisma.PrismaPromise<GetDestinationsAggregateType<T>>

    /**
     * Group by Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinationsGroupByArgs} args - Group by arguments.
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
      T extends destinationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: destinationsGroupByArgs['orderBy'] }
        : { orderBy?: destinationsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, destinationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the destinations model
   */
  readonly fields: destinationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for destinations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__destinationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the destinations model
   */
  interface destinationsFieldRefs {
    readonly id: FieldRef<"destinations", 'Int'>
    readonly url_maps: FieldRef<"destinations", 'String'>
    readonly name: FieldRef<"destinations", 'String'>
    readonly rating: FieldRef<"destinations", 'Decimal'>
    readonly tipe: FieldRef<"destinations", 'String'>
    readonly url_gambar: FieldRef<"destinations", 'String'>
    readonly provinsi: FieldRef<"destinations", 'String'>
    readonly latitutde: FieldRef<"destinations", 'Decimal'>
    readonly longtitude: FieldRef<"destinations", 'Decimal'>
    readonly kategori: FieldRef<"destinations", 'String'>
    readonly created_at: FieldRef<"destinations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * destinations findUnique
   */
  export type destinationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Filter, which destinations to fetch.
     */
    where: destinationsWhereUniqueInput
  }

  /**
   * destinations findUniqueOrThrow
   */
  export type destinationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Filter, which destinations to fetch.
     */
    where: destinationsWhereUniqueInput
  }

  /**
   * destinations findFirst
   */
  export type destinationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Filter, which destinations to fetch.
     */
    where?: destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinations to fetch.
     */
    orderBy?: destinationsOrderByWithRelationInput | destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for destinations.
     */
    cursor?: destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of destinations.
     */
    distinct?: DestinationsScalarFieldEnum | DestinationsScalarFieldEnum[]
  }

  /**
   * destinations findFirstOrThrow
   */
  export type destinationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Filter, which destinations to fetch.
     */
    where?: destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinations to fetch.
     */
    orderBy?: destinationsOrderByWithRelationInput | destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for destinations.
     */
    cursor?: destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of destinations.
     */
    distinct?: DestinationsScalarFieldEnum | DestinationsScalarFieldEnum[]
  }

  /**
   * destinations findMany
   */
  export type destinationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Filter, which destinations to fetch.
     */
    where?: destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinations to fetch.
     */
    orderBy?: destinationsOrderByWithRelationInput | destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing destinations.
     */
    cursor?: destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinations.
     */
    skip?: number
    distinct?: DestinationsScalarFieldEnum | DestinationsScalarFieldEnum[]
  }

  /**
   * destinations create
   */
  export type destinationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * The data needed to create a destinations.
     */
    data: XOR<destinationsCreateInput, destinationsUncheckedCreateInput>
  }

  /**
   * destinations createMany
   */
  export type destinationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many destinations.
     */
    data: destinationsCreateManyInput | destinationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * destinations createManyAndReturn
   */
  export type destinationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * The data used to create many destinations.
     */
    data: destinationsCreateManyInput | destinationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * destinations update
   */
  export type destinationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * The data needed to update a destinations.
     */
    data: XOR<destinationsUpdateInput, destinationsUncheckedUpdateInput>
    /**
     * Choose, which destinations to update.
     */
    where: destinationsWhereUniqueInput
  }

  /**
   * destinations updateMany
   */
  export type destinationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update destinations.
     */
    data: XOR<destinationsUpdateManyMutationInput, destinationsUncheckedUpdateManyInput>
    /**
     * Filter which destinations to update
     */
    where?: destinationsWhereInput
    /**
     * Limit how many destinations to update.
     */
    limit?: number
  }

  /**
   * destinations updateManyAndReturn
   */
  export type destinationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * The data used to update destinations.
     */
    data: XOR<destinationsUpdateManyMutationInput, destinationsUncheckedUpdateManyInput>
    /**
     * Filter which destinations to update
     */
    where?: destinationsWhereInput
    /**
     * Limit how many destinations to update.
     */
    limit?: number
  }

  /**
   * destinations upsert
   */
  export type destinationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * The filter to search for the destinations to update in case it exists.
     */
    where: destinationsWhereUniqueInput
    /**
     * In case the destinations found by the `where` argument doesn't exist, create a new destinations with this data.
     */
    create: XOR<destinationsCreateInput, destinationsUncheckedCreateInput>
    /**
     * In case the destinations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<destinationsUpdateInput, destinationsUncheckedUpdateInput>
  }

  /**
   * destinations delete
   */
  export type destinationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Filter which destinations to delete.
     */
    where: destinationsWhereUniqueInput
  }

  /**
   * destinations deleteMany
   */
  export type destinationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which destinations to delete
     */
    where?: destinationsWhereInput
    /**
     * Limit how many destinations to delete.
     */
    limit?: number
  }

  /**
   * destinations without action
   */
  export type destinationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
  }


  /**
   * Model kuliners
   */

  export type AggregateKuliners = {
    _count: KulinersCountAggregateOutputType | null
    _avg: KulinersAvgAggregateOutputType | null
    _sum: KulinersSumAggregateOutputType | null
    _min: KulinersMinAggregateOutputType | null
    _max: KulinersMaxAggregateOutputType | null
  }

  export type KulinersAvgAggregateOutputType = {
    id: number | null
  }

  export type KulinersSumAggregateOutputType = {
    id: number | null
  }

  export type KulinersMinAggregateOutputType = {
    id: number | null
    judul: string | null
    deskripsi: string | null
    gambar: string | null
    tipe: string | null
    provinsi: string | null
    created_at: Date | null
  }

  export type KulinersMaxAggregateOutputType = {
    id: number | null
    judul: string | null
    deskripsi: string | null
    gambar: string | null
    tipe: string | null
    provinsi: string | null
    created_at: Date | null
  }

  export type KulinersCountAggregateOutputType = {
    id: number
    judul: number
    deskripsi: number
    gambar: number
    tipe: number
    provinsi: number
    created_at: number
    _all: number
  }


  export type KulinersAvgAggregateInputType = {
    id?: true
  }

  export type KulinersSumAggregateInputType = {
    id?: true
  }

  export type KulinersMinAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    gambar?: true
    tipe?: true
    provinsi?: true
    created_at?: true
  }

  export type KulinersMaxAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    gambar?: true
    tipe?: true
    provinsi?: true
    created_at?: true
  }

  export type KulinersCountAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    gambar?: true
    tipe?: true
    provinsi?: true
    created_at?: true
    _all?: true
  }

  export type KulinersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kuliners to aggregate.
     */
    where?: kulinersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kuliners to fetch.
     */
    orderBy?: kulinersOrderByWithRelationInput | kulinersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kulinersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kuliners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kuliners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kuliners
    **/
    _count?: true | KulinersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KulinersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KulinersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KulinersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KulinersMaxAggregateInputType
  }

  export type GetKulinersAggregateType<T extends KulinersAggregateArgs> = {
        [P in keyof T & keyof AggregateKuliners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKuliners[P]>
      : GetScalarType<T[P], AggregateKuliners[P]>
  }




  export type kulinersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kulinersWhereInput
    orderBy?: kulinersOrderByWithAggregationInput | kulinersOrderByWithAggregationInput[]
    by: KulinersScalarFieldEnum[] | KulinersScalarFieldEnum
    having?: kulinersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KulinersCountAggregateInputType | true
    _avg?: KulinersAvgAggregateInputType
    _sum?: KulinersSumAggregateInputType
    _min?: KulinersMinAggregateInputType
    _max?: KulinersMaxAggregateInputType
  }

  export type KulinersGroupByOutputType = {
    id: number
    judul: string | null
    deskripsi: string | null
    gambar: string | null
    tipe: string | null
    provinsi: string | null
    created_at: Date
    _count: KulinersCountAggregateOutputType | null
    _avg: KulinersAvgAggregateOutputType | null
    _sum: KulinersSumAggregateOutputType | null
    _min: KulinersMinAggregateOutputType | null
    _max: KulinersMaxAggregateOutputType | null
  }

  type GetKulinersGroupByPayload<T extends kulinersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KulinersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KulinersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KulinersGroupByOutputType[P]>
            : GetScalarType<T[P], KulinersGroupByOutputType[P]>
        }
      >
    >


  export type kulinersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    deskripsi?: boolean
    gambar?: boolean
    tipe?: boolean
    provinsi?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["kuliners"]>

  export type kulinersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    deskripsi?: boolean
    gambar?: boolean
    tipe?: boolean
    provinsi?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["kuliners"]>

  export type kulinersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    deskripsi?: boolean
    gambar?: boolean
    tipe?: boolean
    provinsi?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["kuliners"]>

  export type kulinersSelectScalar = {
    id?: boolean
    judul?: boolean
    deskripsi?: boolean
    gambar?: boolean
    tipe?: boolean
    provinsi?: boolean
    created_at?: boolean
  }

  export type kulinersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "deskripsi" | "gambar" | "tipe" | "provinsi" | "created_at", ExtArgs["result"]["kuliners"]>

  export type $kulinersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kuliners"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judul: string | null
      deskripsi: string | null
      gambar: string | null
      tipe: string | null
      provinsi: string | null
      created_at: Date
    }, ExtArgs["result"]["kuliners"]>
    composites: {}
  }

  type kulinersGetPayload<S extends boolean | null | undefined | kulinersDefaultArgs> = $Result.GetResult<Prisma.$kulinersPayload, S>

  type kulinersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kulinersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KulinersCountAggregateInputType | true
    }

  export interface kulinersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kuliners'], meta: { name: 'kuliners' } }
    /**
     * Find zero or one Kuliners that matches the filter.
     * @param {kulinersFindUniqueArgs} args - Arguments to find a Kuliners
     * @example
     * // Get one Kuliners
     * const kuliners = await prisma.kuliners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kulinersFindUniqueArgs>(args: SelectSubset<T, kulinersFindUniqueArgs<ExtArgs>>): Prisma__kulinersClient<$Result.GetResult<Prisma.$kulinersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kuliners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kulinersFindUniqueOrThrowArgs} args - Arguments to find a Kuliners
     * @example
     * // Get one Kuliners
     * const kuliners = await prisma.kuliners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kulinersFindUniqueOrThrowArgs>(args: SelectSubset<T, kulinersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kulinersClient<$Result.GetResult<Prisma.$kulinersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kuliners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kulinersFindFirstArgs} args - Arguments to find a Kuliners
     * @example
     * // Get one Kuliners
     * const kuliners = await prisma.kuliners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kulinersFindFirstArgs>(args?: SelectSubset<T, kulinersFindFirstArgs<ExtArgs>>): Prisma__kulinersClient<$Result.GetResult<Prisma.$kulinersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kuliners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kulinersFindFirstOrThrowArgs} args - Arguments to find a Kuliners
     * @example
     * // Get one Kuliners
     * const kuliners = await prisma.kuliners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kulinersFindFirstOrThrowArgs>(args?: SelectSubset<T, kulinersFindFirstOrThrowArgs<ExtArgs>>): Prisma__kulinersClient<$Result.GetResult<Prisma.$kulinersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kuliners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kulinersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kuliners
     * const kuliners = await prisma.kuliners.findMany()
     * 
     * // Get first 10 Kuliners
     * const kuliners = await prisma.kuliners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kulinersWithIdOnly = await prisma.kuliners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends kulinersFindManyArgs>(args?: SelectSubset<T, kulinersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kulinersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kuliners.
     * @param {kulinersCreateArgs} args - Arguments to create a Kuliners.
     * @example
     * // Create one Kuliners
     * const Kuliners = await prisma.kuliners.create({
     *   data: {
     *     // ... data to create a Kuliners
     *   }
     * })
     * 
     */
    create<T extends kulinersCreateArgs>(args: SelectSubset<T, kulinersCreateArgs<ExtArgs>>): Prisma__kulinersClient<$Result.GetResult<Prisma.$kulinersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kuliners.
     * @param {kulinersCreateManyArgs} args - Arguments to create many Kuliners.
     * @example
     * // Create many Kuliners
     * const kuliners = await prisma.kuliners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kulinersCreateManyArgs>(args?: SelectSubset<T, kulinersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kuliners and returns the data saved in the database.
     * @param {kulinersCreateManyAndReturnArgs} args - Arguments to create many Kuliners.
     * @example
     * // Create many Kuliners
     * const kuliners = await prisma.kuliners.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kuliners and only return the `id`
     * const kulinersWithIdOnly = await prisma.kuliners.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends kulinersCreateManyAndReturnArgs>(args?: SelectSubset<T, kulinersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kulinersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kuliners.
     * @param {kulinersDeleteArgs} args - Arguments to delete one Kuliners.
     * @example
     * // Delete one Kuliners
     * const Kuliners = await prisma.kuliners.delete({
     *   where: {
     *     // ... filter to delete one Kuliners
     *   }
     * })
     * 
     */
    delete<T extends kulinersDeleteArgs>(args: SelectSubset<T, kulinersDeleteArgs<ExtArgs>>): Prisma__kulinersClient<$Result.GetResult<Prisma.$kulinersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kuliners.
     * @param {kulinersUpdateArgs} args - Arguments to update one Kuliners.
     * @example
     * // Update one Kuliners
     * const kuliners = await prisma.kuliners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kulinersUpdateArgs>(args: SelectSubset<T, kulinersUpdateArgs<ExtArgs>>): Prisma__kulinersClient<$Result.GetResult<Prisma.$kulinersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kuliners.
     * @param {kulinersDeleteManyArgs} args - Arguments to filter Kuliners to delete.
     * @example
     * // Delete a few Kuliners
     * const { count } = await prisma.kuliners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kulinersDeleteManyArgs>(args?: SelectSubset<T, kulinersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kuliners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kulinersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kuliners
     * const kuliners = await prisma.kuliners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kulinersUpdateManyArgs>(args: SelectSubset<T, kulinersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kuliners and returns the data updated in the database.
     * @param {kulinersUpdateManyAndReturnArgs} args - Arguments to update many Kuliners.
     * @example
     * // Update many Kuliners
     * const kuliners = await prisma.kuliners.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kuliners and only return the `id`
     * const kulinersWithIdOnly = await prisma.kuliners.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends kulinersUpdateManyAndReturnArgs>(args: SelectSubset<T, kulinersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kulinersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kuliners.
     * @param {kulinersUpsertArgs} args - Arguments to update or create a Kuliners.
     * @example
     * // Update or create a Kuliners
     * const kuliners = await prisma.kuliners.upsert({
     *   create: {
     *     // ... data to create a Kuliners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kuliners we want to update
     *   }
     * })
     */
    upsert<T extends kulinersUpsertArgs>(args: SelectSubset<T, kulinersUpsertArgs<ExtArgs>>): Prisma__kulinersClient<$Result.GetResult<Prisma.$kulinersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kuliners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kulinersCountArgs} args - Arguments to filter Kuliners to count.
     * @example
     * // Count the number of Kuliners
     * const count = await prisma.kuliners.count({
     *   where: {
     *     // ... the filter for the Kuliners we want to count
     *   }
     * })
    **/
    count<T extends kulinersCountArgs>(
      args?: Subset<T, kulinersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KulinersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kuliners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KulinersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KulinersAggregateArgs>(args: Subset<T, KulinersAggregateArgs>): Prisma.PrismaPromise<GetKulinersAggregateType<T>>

    /**
     * Group by Kuliners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kulinersGroupByArgs} args - Group by arguments.
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
      T extends kulinersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kulinersGroupByArgs['orderBy'] }
        : { orderBy?: kulinersGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, kulinersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKulinersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kuliners model
   */
  readonly fields: kulinersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kuliners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kulinersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the kuliners model
   */
  interface kulinersFieldRefs {
    readonly id: FieldRef<"kuliners", 'Int'>
    readonly judul: FieldRef<"kuliners", 'String'>
    readonly deskripsi: FieldRef<"kuliners", 'String'>
    readonly gambar: FieldRef<"kuliners", 'String'>
    readonly tipe: FieldRef<"kuliners", 'String'>
    readonly provinsi: FieldRef<"kuliners", 'String'>
    readonly created_at: FieldRef<"kuliners", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * kuliners findUnique
   */
  export type kulinersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kuliners
     */
    select?: kulinersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kuliners
     */
    omit?: kulinersOmit<ExtArgs> | null
    /**
     * Filter, which kuliners to fetch.
     */
    where: kulinersWhereUniqueInput
  }

  /**
   * kuliners findUniqueOrThrow
   */
  export type kulinersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kuliners
     */
    select?: kulinersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kuliners
     */
    omit?: kulinersOmit<ExtArgs> | null
    /**
     * Filter, which kuliners to fetch.
     */
    where: kulinersWhereUniqueInput
  }

  /**
   * kuliners findFirst
   */
  export type kulinersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kuliners
     */
    select?: kulinersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kuliners
     */
    omit?: kulinersOmit<ExtArgs> | null
    /**
     * Filter, which kuliners to fetch.
     */
    where?: kulinersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kuliners to fetch.
     */
    orderBy?: kulinersOrderByWithRelationInput | kulinersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kuliners.
     */
    cursor?: kulinersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kuliners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kuliners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kuliners.
     */
    distinct?: KulinersScalarFieldEnum | KulinersScalarFieldEnum[]
  }

  /**
   * kuliners findFirstOrThrow
   */
  export type kulinersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kuliners
     */
    select?: kulinersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kuliners
     */
    omit?: kulinersOmit<ExtArgs> | null
    /**
     * Filter, which kuliners to fetch.
     */
    where?: kulinersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kuliners to fetch.
     */
    orderBy?: kulinersOrderByWithRelationInput | kulinersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kuliners.
     */
    cursor?: kulinersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kuliners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kuliners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kuliners.
     */
    distinct?: KulinersScalarFieldEnum | KulinersScalarFieldEnum[]
  }

  /**
   * kuliners findMany
   */
  export type kulinersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kuliners
     */
    select?: kulinersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kuliners
     */
    omit?: kulinersOmit<ExtArgs> | null
    /**
     * Filter, which kuliners to fetch.
     */
    where?: kulinersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kuliners to fetch.
     */
    orderBy?: kulinersOrderByWithRelationInput | kulinersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kuliners.
     */
    cursor?: kulinersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kuliners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kuliners.
     */
    skip?: number
    distinct?: KulinersScalarFieldEnum | KulinersScalarFieldEnum[]
  }

  /**
   * kuliners create
   */
  export type kulinersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kuliners
     */
    select?: kulinersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kuliners
     */
    omit?: kulinersOmit<ExtArgs> | null
    /**
     * The data needed to create a kuliners.
     */
    data: XOR<kulinersCreateInput, kulinersUncheckedCreateInput>
  }

  /**
   * kuliners createMany
   */
  export type kulinersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kuliners.
     */
    data: kulinersCreateManyInput | kulinersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kuliners createManyAndReturn
   */
  export type kulinersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kuliners
     */
    select?: kulinersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kuliners
     */
    omit?: kulinersOmit<ExtArgs> | null
    /**
     * The data used to create many kuliners.
     */
    data: kulinersCreateManyInput | kulinersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kuliners update
   */
  export type kulinersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kuliners
     */
    select?: kulinersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kuliners
     */
    omit?: kulinersOmit<ExtArgs> | null
    /**
     * The data needed to update a kuliners.
     */
    data: XOR<kulinersUpdateInput, kulinersUncheckedUpdateInput>
    /**
     * Choose, which kuliners to update.
     */
    where: kulinersWhereUniqueInput
  }

  /**
   * kuliners updateMany
   */
  export type kulinersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kuliners.
     */
    data: XOR<kulinersUpdateManyMutationInput, kulinersUncheckedUpdateManyInput>
    /**
     * Filter which kuliners to update
     */
    where?: kulinersWhereInput
    /**
     * Limit how many kuliners to update.
     */
    limit?: number
  }

  /**
   * kuliners updateManyAndReturn
   */
  export type kulinersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kuliners
     */
    select?: kulinersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kuliners
     */
    omit?: kulinersOmit<ExtArgs> | null
    /**
     * The data used to update kuliners.
     */
    data: XOR<kulinersUpdateManyMutationInput, kulinersUncheckedUpdateManyInput>
    /**
     * Filter which kuliners to update
     */
    where?: kulinersWhereInput
    /**
     * Limit how many kuliners to update.
     */
    limit?: number
  }

  /**
   * kuliners upsert
   */
  export type kulinersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kuliners
     */
    select?: kulinersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kuliners
     */
    omit?: kulinersOmit<ExtArgs> | null
    /**
     * The filter to search for the kuliners to update in case it exists.
     */
    where: kulinersWhereUniqueInput
    /**
     * In case the kuliners found by the `where` argument doesn't exist, create a new kuliners with this data.
     */
    create: XOR<kulinersCreateInput, kulinersUncheckedCreateInput>
    /**
     * In case the kuliners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kulinersUpdateInput, kulinersUncheckedUpdateInput>
  }

  /**
   * kuliners delete
   */
  export type kulinersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kuliners
     */
    select?: kulinersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kuliners
     */
    omit?: kulinersOmit<ExtArgs> | null
    /**
     * Filter which kuliners to delete.
     */
    where: kulinersWhereUniqueInput
  }

  /**
   * kuliners deleteMany
   */
  export type kulinersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kuliners to delete
     */
    where?: kulinersWhereInput
    /**
     * Limit how many kuliners to delete.
     */
    limit?: number
  }

  /**
   * kuliners without action
   */
  export type kulinersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kuliners
     */
    select?: kulinersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kuliners
     */
    omit?: kulinersOmit<ExtArgs> | null
  }


  /**
   * Model rekomendasi_destinasi
   */

  export type AggregateRekomendasi_destinasi = {
    _count: Rekomendasi_destinasiCountAggregateOutputType | null
    _avg: Rekomendasi_destinasiAvgAggregateOutputType | null
    _sum: Rekomendasi_destinasiSumAggregateOutputType | null
    _min: Rekomendasi_destinasiMinAggregateOutputType | null
    _max: Rekomendasi_destinasiMaxAggregateOutputType | null
  }

  export type Rekomendasi_destinasiAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Rekomendasi_destinasiSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Rekomendasi_destinasiMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    list_kategori: string | null
    created_at: Date | null
  }

  export type Rekomendasi_destinasiMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    list_kategori: string | null
    created_at: Date | null
  }

  export type Rekomendasi_destinasiCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    list_kategori: number
    created_at: number
    _all: number
  }


  export type Rekomendasi_destinasiAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Rekomendasi_destinasiSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Rekomendasi_destinasiMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    list_kategori?: true
    created_at?: true
  }

  export type Rekomendasi_destinasiMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    list_kategori?: true
    created_at?: true
  }

  export type Rekomendasi_destinasiCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    list_kategori?: true
    created_at?: true
    _all?: true
  }

  export type Rekomendasi_destinasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rekomendasi_destinasi to aggregate.
     */
    where?: rekomendasi_destinasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rekomendasi_destinasis to fetch.
     */
    orderBy?: rekomendasi_destinasiOrderByWithRelationInput | rekomendasi_destinasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rekomendasi_destinasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rekomendasi_destinasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rekomendasi_destinasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rekomendasi_destinasis
    **/
    _count?: true | Rekomendasi_destinasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rekomendasi_destinasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rekomendasi_destinasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rekomendasi_destinasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rekomendasi_destinasiMaxAggregateInputType
  }

  export type GetRekomendasi_destinasiAggregateType<T extends Rekomendasi_destinasiAggregateArgs> = {
        [P in keyof T & keyof AggregateRekomendasi_destinasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRekomendasi_destinasi[P]>
      : GetScalarType<T[P], AggregateRekomendasi_destinasi[P]>
  }




  export type rekomendasi_destinasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rekomendasi_destinasiWhereInput
    orderBy?: rekomendasi_destinasiOrderByWithAggregationInput | rekomendasi_destinasiOrderByWithAggregationInput[]
    by: Rekomendasi_destinasiScalarFieldEnum[] | Rekomendasi_destinasiScalarFieldEnum
    having?: rekomendasi_destinasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rekomendasi_destinasiCountAggregateInputType | true
    _avg?: Rekomendasi_destinasiAvgAggregateInputType
    _sum?: Rekomendasi_destinasiSumAggregateInputType
    _min?: Rekomendasi_destinasiMinAggregateInputType
    _max?: Rekomendasi_destinasiMaxAggregateInputType
  }

  export type Rekomendasi_destinasiGroupByOutputType = {
    id: number
    user_id: number
    name: string | null
    list_kategori: string
    created_at: Date
    _count: Rekomendasi_destinasiCountAggregateOutputType | null
    _avg: Rekomendasi_destinasiAvgAggregateOutputType | null
    _sum: Rekomendasi_destinasiSumAggregateOutputType | null
    _min: Rekomendasi_destinasiMinAggregateOutputType | null
    _max: Rekomendasi_destinasiMaxAggregateOutputType | null
  }

  type GetRekomendasi_destinasiGroupByPayload<T extends rekomendasi_destinasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rekomendasi_destinasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rekomendasi_destinasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rekomendasi_destinasiGroupByOutputType[P]>
            : GetScalarType<T[P], Rekomendasi_destinasiGroupByOutputType[P]>
        }
      >
    >


  export type rekomendasi_destinasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    list_kategori?: boolean
    created_at?: boolean
    users?: boolean | rekomendasi_destinasi$usersArgs<ExtArgs>
  }, ExtArgs["result"]["rekomendasi_destinasi"]>

  export type rekomendasi_destinasiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    list_kategori?: boolean
    created_at?: boolean
    users?: boolean | rekomendasi_destinasi$usersArgs<ExtArgs>
  }, ExtArgs["result"]["rekomendasi_destinasi"]>

  export type rekomendasi_destinasiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    list_kategori?: boolean
    created_at?: boolean
    users?: boolean | rekomendasi_destinasi$usersArgs<ExtArgs>
  }, ExtArgs["result"]["rekomendasi_destinasi"]>

  export type rekomendasi_destinasiSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    list_kategori?: boolean
    created_at?: boolean
  }

  export type rekomendasi_destinasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "list_kategori" | "created_at", ExtArgs["result"]["rekomendasi_destinasi"]>
  export type rekomendasi_destinasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | rekomendasi_destinasi$usersArgs<ExtArgs>
  }
  export type rekomendasi_destinasiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | rekomendasi_destinasi$usersArgs<ExtArgs>
  }
  export type rekomendasi_destinasiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | rekomendasi_destinasi$usersArgs<ExtArgs>
  }

  export type $rekomendasi_destinasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rekomendasi_destinasi"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string | null
      list_kategori: string
      created_at: Date
    }, ExtArgs["result"]["rekomendasi_destinasi"]>
    composites: {}
  }

  type rekomendasi_destinasiGetPayload<S extends boolean | null | undefined | rekomendasi_destinasiDefaultArgs> = $Result.GetResult<Prisma.$rekomendasi_destinasiPayload, S>

  type rekomendasi_destinasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rekomendasi_destinasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rekomendasi_destinasiCountAggregateInputType | true
    }

  export interface rekomendasi_destinasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rekomendasi_destinasi'], meta: { name: 'rekomendasi_destinasi' } }
    /**
     * Find zero or one Rekomendasi_destinasi that matches the filter.
     * @param {rekomendasi_destinasiFindUniqueArgs} args - Arguments to find a Rekomendasi_destinasi
     * @example
     * // Get one Rekomendasi_destinasi
     * const rekomendasi_destinasi = await prisma.rekomendasi_destinasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rekomendasi_destinasiFindUniqueArgs>(args: SelectSubset<T, rekomendasi_destinasiFindUniqueArgs<ExtArgs>>): Prisma__rekomendasi_destinasiClient<$Result.GetResult<Prisma.$rekomendasi_destinasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rekomendasi_destinasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rekomendasi_destinasiFindUniqueOrThrowArgs} args - Arguments to find a Rekomendasi_destinasi
     * @example
     * // Get one Rekomendasi_destinasi
     * const rekomendasi_destinasi = await prisma.rekomendasi_destinasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rekomendasi_destinasiFindUniqueOrThrowArgs>(args: SelectSubset<T, rekomendasi_destinasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rekomendasi_destinasiClient<$Result.GetResult<Prisma.$rekomendasi_destinasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rekomendasi_destinasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekomendasi_destinasiFindFirstArgs} args - Arguments to find a Rekomendasi_destinasi
     * @example
     * // Get one Rekomendasi_destinasi
     * const rekomendasi_destinasi = await prisma.rekomendasi_destinasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rekomendasi_destinasiFindFirstArgs>(args?: SelectSubset<T, rekomendasi_destinasiFindFirstArgs<ExtArgs>>): Prisma__rekomendasi_destinasiClient<$Result.GetResult<Prisma.$rekomendasi_destinasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rekomendasi_destinasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekomendasi_destinasiFindFirstOrThrowArgs} args - Arguments to find a Rekomendasi_destinasi
     * @example
     * // Get one Rekomendasi_destinasi
     * const rekomendasi_destinasi = await prisma.rekomendasi_destinasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rekomendasi_destinasiFindFirstOrThrowArgs>(args?: SelectSubset<T, rekomendasi_destinasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__rekomendasi_destinasiClient<$Result.GetResult<Prisma.$rekomendasi_destinasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rekomendasi_destinasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekomendasi_destinasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rekomendasi_destinasis
     * const rekomendasi_destinasis = await prisma.rekomendasi_destinasi.findMany()
     * 
     * // Get first 10 Rekomendasi_destinasis
     * const rekomendasi_destinasis = await prisma.rekomendasi_destinasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rekomendasi_destinasiWithIdOnly = await prisma.rekomendasi_destinasi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rekomendasi_destinasiFindManyArgs>(args?: SelectSubset<T, rekomendasi_destinasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rekomendasi_destinasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rekomendasi_destinasi.
     * @param {rekomendasi_destinasiCreateArgs} args - Arguments to create a Rekomendasi_destinasi.
     * @example
     * // Create one Rekomendasi_destinasi
     * const Rekomendasi_destinasi = await prisma.rekomendasi_destinasi.create({
     *   data: {
     *     // ... data to create a Rekomendasi_destinasi
     *   }
     * })
     * 
     */
    create<T extends rekomendasi_destinasiCreateArgs>(args: SelectSubset<T, rekomendasi_destinasiCreateArgs<ExtArgs>>): Prisma__rekomendasi_destinasiClient<$Result.GetResult<Prisma.$rekomendasi_destinasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rekomendasi_destinasis.
     * @param {rekomendasi_destinasiCreateManyArgs} args - Arguments to create many Rekomendasi_destinasis.
     * @example
     * // Create many Rekomendasi_destinasis
     * const rekomendasi_destinasi = await prisma.rekomendasi_destinasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rekomendasi_destinasiCreateManyArgs>(args?: SelectSubset<T, rekomendasi_destinasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rekomendasi_destinasis and returns the data saved in the database.
     * @param {rekomendasi_destinasiCreateManyAndReturnArgs} args - Arguments to create many Rekomendasi_destinasis.
     * @example
     * // Create many Rekomendasi_destinasis
     * const rekomendasi_destinasi = await prisma.rekomendasi_destinasi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rekomendasi_destinasis and only return the `id`
     * const rekomendasi_destinasiWithIdOnly = await prisma.rekomendasi_destinasi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rekomendasi_destinasiCreateManyAndReturnArgs>(args?: SelectSubset<T, rekomendasi_destinasiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rekomendasi_destinasiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rekomendasi_destinasi.
     * @param {rekomendasi_destinasiDeleteArgs} args - Arguments to delete one Rekomendasi_destinasi.
     * @example
     * // Delete one Rekomendasi_destinasi
     * const Rekomendasi_destinasi = await prisma.rekomendasi_destinasi.delete({
     *   where: {
     *     // ... filter to delete one Rekomendasi_destinasi
     *   }
     * })
     * 
     */
    delete<T extends rekomendasi_destinasiDeleteArgs>(args: SelectSubset<T, rekomendasi_destinasiDeleteArgs<ExtArgs>>): Prisma__rekomendasi_destinasiClient<$Result.GetResult<Prisma.$rekomendasi_destinasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rekomendasi_destinasi.
     * @param {rekomendasi_destinasiUpdateArgs} args - Arguments to update one Rekomendasi_destinasi.
     * @example
     * // Update one Rekomendasi_destinasi
     * const rekomendasi_destinasi = await prisma.rekomendasi_destinasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rekomendasi_destinasiUpdateArgs>(args: SelectSubset<T, rekomendasi_destinasiUpdateArgs<ExtArgs>>): Prisma__rekomendasi_destinasiClient<$Result.GetResult<Prisma.$rekomendasi_destinasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rekomendasi_destinasis.
     * @param {rekomendasi_destinasiDeleteManyArgs} args - Arguments to filter Rekomendasi_destinasis to delete.
     * @example
     * // Delete a few Rekomendasi_destinasis
     * const { count } = await prisma.rekomendasi_destinasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rekomendasi_destinasiDeleteManyArgs>(args?: SelectSubset<T, rekomendasi_destinasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rekomendasi_destinasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekomendasi_destinasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rekomendasi_destinasis
     * const rekomendasi_destinasi = await prisma.rekomendasi_destinasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rekomendasi_destinasiUpdateManyArgs>(args: SelectSubset<T, rekomendasi_destinasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rekomendasi_destinasis and returns the data updated in the database.
     * @param {rekomendasi_destinasiUpdateManyAndReturnArgs} args - Arguments to update many Rekomendasi_destinasis.
     * @example
     * // Update many Rekomendasi_destinasis
     * const rekomendasi_destinasi = await prisma.rekomendasi_destinasi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rekomendasi_destinasis and only return the `id`
     * const rekomendasi_destinasiWithIdOnly = await prisma.rekomendasi_destinasi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rekomendasi_destinasiUpdateManyAndReturnArgs>(args: SelectSubset<T, rekomendasi_destinasiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rekomendasi_destinasiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rekomendasi_destinasi.
     * @param {rekomendasi_destinasiUpsertArgs} args - Arguments to update or create a Rekomendasi_destinasi.
     * @example
     * // Update or create a Rekomendasi_destinasi
     * const rekomendasi_destinasi = await prisma.rekomendasi_destinasi.upsert({
     *   create: {
     *     // ... data to create a Rekomendasi_destinasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rekomendasi_destinasi we want to update
     *   }
     * })
     */
    upsert<T extends rekomendasi_destinasiUpsertArgs>(args: SelectSubset<T, rekomendasi_destinasiUpsertArgs<ExtArgs>>): Prisma__rekomendasi_destinasiClient<$Result.GetResult<Prisma.$rekomendasi_destinasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rekomendasi_destinasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekomendasi_destinasiCountArgs} args - Arguments to filter Rekomendasi_destinasis to count.
     * @example
     * // Count the number of Rekomendasi_destinasis
     * const count = await prisma.rekomendasi_destinasi.count({
     *   where: {
     *     // ... the filter for the Rekomendasi_destinasis we want to count
     *   }
     * })
    **/
    count<T extends rekomendasi_destinasiCountArgs>(
      args?: Subset<T, rekomendasi_destinasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rekomendasi_destinasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rekomendasi_destinasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rekomendasi_destinasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rekomendasi_destinasiAggregateArgs>(args: Subset<T, Rekomendasi_destinasiAggregateArgs>): Prisma.PrismaPromise<GetRekomendasi_destinasiAggregateType<T>>

    /**
     * Group by Rekomendasi_destinasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekomendasi_destinasiGroupByArgs} args - Group by arguments.
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
      T extends rekomendasi_destinasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rekomendasi_destinasiGroupByArgs['orderBy'] }
        : { orderBy?: rekomendasi_destinasiGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rekomendasi_destinasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRekomendasi_destinasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rekomendasi_destinasi model
   */
  readonly fields: rekomendasi_destinasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rekomendasi_destinasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rekomendasi_destinasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends rekomendasi_destinasi$usersArgs<ExtArgs> = {}>(args?: Subset<T, rekomendasi_destinasi$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rekomendasi_destinasi model
   */
  interface rekomendasi_destinasiFieldRefs {
    readonly id: FieldRef<"rekomendasi_destinasi", 'Int'>
    readonly user_id: FieldRef<"rekomendasi_destinasi", 'Int'>
    readonly name: FieldRef<"rekomendasi_destinasi", 'String'>
    readonly list_kategori: FieldRef<"rekomendasi_destinasi", 'String'>
    readonly created_at: FieldRef<"rekomendasi_destinasi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * rekomendasi_destinasi findUnique
   */
  export type rekomendasi_destinasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekomendasi_destinasi
     */
    select?: rekomendasi_destinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rekomendasi_destinasi
     */
    omit?: rekomendasi_destinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekomendasi_destinasiInclude<ExtArgs> | null
    /**
     * Filter, which rekomendasi_destinasi to fetch.
     */
    where: rekomendasi_destinasiWhereUniqueInput
  }

  /**
   * rekomendasi_destinasi findUniqueOrThrow
   */
  export type rekomendasi_destinasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekomendasi_destinasi
     */
    select?: rekomendasi_destinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rekomendasi_destinasi
     */
    omit?: rekomendasi_destinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekomendasi_destinasiInclude<ExtArgs> | null
    /**
     * Filter, which rekomendasi_destinasi to fetch.
     */
    where: rekomendasi_destinasiWhereUniqueInput
  }

  /**
   * rekomendasi_destinasi findFirst
   */
  export type rekomendasi_destinasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekomendasi_destinasi
     */
    select?: rekomendasi_destinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rekomendasi_destinasi
     */
    omit?: rekomendasi_destinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekomendasi_destinasiInclude<ExtArgs> | null
    /**
     * Filter, which rekomendasi_destinasi to fetch.
     */
    where?: rekomendasi_destinasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rekomendasi_destinasis to fetch.
     */
    orderBy?: rekomendasi_destinasiOrderByWithRelationInput | rekomendasi_destinasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rekomendasi_destinasis.
     */
    cursor?: rekomendasi_destinasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rekomendasi_destinasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rekomendasi_destinasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rekomendasi_destinasis.
     */
    distinct?: Rekomendasi_destinasiScalarFieldEnum | Rekomendasi_destinasiScalarFieldEnum[]
  }

  /**
   * rekomendasi_destinasi findFirstOrThrow
   */
  export type rekomendasi_destinasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekomendasi_destinasi
     */
    select?: rekomendasi_destinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rekomendasi_destinasi
     */
    omit?: rekomendasi_destinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekomendasi_destinasiInclude<ExtArgs> | null
    /**
     * Filter, which rekomendasi_destinasi to fetch.
     */
    where?: rekomendasi_destinasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rekomendasi_destinasis to fetch.
     */
    orderBy?: rekomendasi_destinasiOrderByWithRelationInput | rekomendasi_destinasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rekomendasi_destinasis.
     */
    cursor?: rekomendasi_destinasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rekomendasi_destinasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rekomendasi_destinasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rekomendasi_destinasis.
     */
    distinct?: Rekomendasi_destinasiScalarFieldEnum | Rekomendasi_destinasiScalarFieldEnum[]
  }

  /**
   * rekomendasi_destinasi findMany
   */
  export type rekomendasi_destinasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekomendasi_destinasi
     */
    select?: rekomendasi_destinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rekomendasi_destinasi
     */
    omit?: rekomendasi_destinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekomendasi_destinasiInclude<ExtArgs> | null
    /**
     * Filter, which rekomendasi_destinasis to fetch.
     */
    where?: rekomendasi_destinasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rekomendasi_destinasis to fetch.
     */
    orderBy?: rekomendasi_destinasiOrderByWithRelationInput | rekomendasi_destinasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rekomendasi_destinasis.
     */
    cursor?: rekomendasi_destinasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rekomendasi_destinasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rekomendasi_destinasis.
     */
    skip?: number
    distinct?: Rekomendasi_destinasiScalarFieldEnum | Rekomendasi_destinasiScalarFieldEnum[]
  }

  /**
   * rekomendasi_destinasi create
   */
  export type rekomendasi_destinasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekomendasi_destinasi
     */
    select?: rekomendasi_destinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rekomendasi_destinasi
     */
    omit?: rekomendasi_destinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekomendasi_destinasiInclude<ExtArgs> | null
    /**
     * The data needed to create a rekomendasi_destinasi.
     */
    data: XOR<rekomendasi_destinasiCreateInput, rekomendasi_destinasiUncheckedCreateInput>
  }

  /**
   * rekomendasi_destinasi createMany
   */
  export type rekomendasi_destinasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rekomendasi_destinasis.
     */
    data: rekomendasi_destinasiCreateManyInput | rekomendasi_destinasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rekomendasi_destinasi createManyAndReturn
   */
  export type rekomendasi_destinasiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekomendasi_destinasi
     */
    select?: rekomendasi_destinasiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rekomendasi_destinasi
     */
    omit?: rekomendasi_destinasiOmit<ExtArgs> | null
    /**
     * The data used to create many rekomendasi_destinasis.
     */
    data: rekomendasi_destinasiCreateManyInput | rekomendasi_destinasiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekomendasi_destinasiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rekomendasi_destinasi update
   */
  export type rekomendasi_destinasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekomendasi_destinasi
     */
    select?: rekomendasi_destinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rekomendasi_destinasi
     */
    omit?: rekomendasi_destinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekomendasi_destinasiInclude<ExtArgs> | null
    /**
     * The data needed to update a rekomendasi_destinasi.
     */
    data: XOR<rekomendasi_destinasiUpdateInput, rekomendasi_destinasiUncheckedUpdateInput>
    /**
     * Choose, which rekomendasi_destinasi to update.
     */
    where: rekomendasi_destinasiWhereUniqueInput
  }

  /**
   * rekomendasi_destinasi updateMany
   */
  export type rekomendasi_destinasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rekomendasi_destinasis.
     */
    data: XOR<rekomendasi_destinasiUpdateManyMutationInput, rekomendasi_destinasiUncheckedUpdateManyInput>
    /**
     * Filter which rekomendasi_destinasis to update
     */
    where?: rekomendasi_destinasiWhereInput
    /**
     * Limit how many rekomendasi_destinasis to update.
     */
    limit?: number
  }

  /**
   * rekomendasi_destinasi updateManyAndReturn
   */
  export type rekomendasi_destinasiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekomendasi_destinasi
     */
    select?: rekomendasi_destinasiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rekomendasi_destinasi
     */
    omit?: rekomendasi_destinasiOmit<ExtArgs> | null
    /**
     * The data used to update rekomendasi_destinasis.
     */
    data: XOR<rekomendasi_destinasiUpdateManyMutationInput, rekomendasi_destinasiUncheckedUpdateManyInput>
    /**
     * Filter which rekomendasi_destinasis to update
     */
    where?: rekomendasi_destinasiWhereInput
    /**
     * Limit how many rekomendasi_destinasis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekomendasi_destinasiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rekomendasi_destinasi upsert
   */
  export type rekomendasi_destinasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekomendasi_destinasi
     */
    select?: rekomendasi_destinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rekomendasi_destinasi
     */
    omit?: rekomendasi_destinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekomendasi_destinasiInclude<ExtArgs> | null
    /**
     * The filter to search for the rekomendasi_destinasi to update in case it exists.
     */
    where: rekomendasi_destinasiWhereUniqueInput
    /**
     * In case the rekomendasi_destinasi found by the `where` argument doesn't exist, create a new rekomendasi_destinasi with this data.
     */
    create: XOR<rekomendasi_destinasiCreateInput, rekomendasi_destinasiUncheckedCreateInput>
    /**
     * In case the rekomendasi_destinasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rekomendasi_destinasiUpdateInput, rekomendasi_destinasiUncheckedUpdateInput>
  }

  /**
   * rekomendasi_destinasi delete
   */
  export type rekomendasi_destinasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekomendasi_destinasi
     */
    select?: rekomendasi_destinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rekomendasi_destinasi
     */
    omit?: rekomendasi_destinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekomendasi_destinasiInclude<ExtArgs> | null
    /**
     * Filter which rekomendasi_destinasi to delete.
     */
    where: rekomendasi_destinasiWhereUniqueInput
  }

  /**
   * rekomendasi_destinasi deleteMany
   */
  export type rekomendasi_destinasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rekomendasi_destinasis to delete
     */
    where?: rekomendasi_destinasiWhereInput
    /**
     * Limit how many rekomendasi_destinasis to delete.
     */
    limit?: number
  }

  /**
   * rekomendasi_destinasi.users
   */
  export type rekomendasi_destinasi$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * rekomendasi_destinasi without action
   */
  export type rekomendasi_destinasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekomendasi_destinasi
     */
    select?: rekomendasi_destinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rekomendasi_destinasi
     */
    omit?: rekomendasi_destinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekomendasi_destinasiInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    gender: string | null
    password: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    gender: string | null
    password: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    gender: number
    password: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    password?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    password?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    password?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    gender: string | null
    password: string | null
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    password?: boolean
    created_at?: boolean
    rekomendasi_destinasi?: boolean | users$rekomendasi_destinasiArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    password?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    password?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    password?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "gender" | "password" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekomendasi_destinasi?: boolean | users$rekomendasi_destinasiArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      rekomendasi_destinasi: Prisma.$rekomendasi_destinasiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      gender: string | null
      password: string | null
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rekomendasi_destinasi<T extends users$rekomendasi_destinasiArgs<ExtArgs> = {}>(args?: Subset<T, users$rekomendasi_destinasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rekomendasi_destinasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly gender: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.rekomendasi_destinasi
   */
  export type users$rekomendasi_destinasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekomendasi_destinasi
     */
    select?: rekomendasi_destinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rekomendasi_destinasi
     */
    omit?: rekomendasi_destinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekomendasi_destinasiInclude<ExtArgs> | null
    where?: rekomendasi_destinasiWhereInput
    orderBy?: rekomendasi_destinasiOrderByWithRelationInput | rekomendasi_destinasiOrderByWithRelationInput[]
    cursor?: rekomendasi_destinasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rekomendasi_destinasiScalarFieldEnum | Rekomendasi_destinasiScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DestinationsScalarFieldEnum: {
    id: 'id',
    url_maps: 'url_maps',
    name: 'name',
    rating: 'rating',
    tipe: 'tipe',
    url_gambar: 'url_gambar',
    provinsi: 'provinsi',
    latitutde: 'latitutde',
    longtitude: 'longtitude',
    kategori: 'kategori',
    created_at: 'created_at'
  };

  export type DestinationsScalarFieldEnum = (typeof DestinationsScalarFieldEnum)[keyof typeof DestinationsScalarFieldEnum]


  export const KulinersScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    deskripsi: 'deskripsi',
    gambar: 'gambar',
    tipe: 'tipe',
    provinsi: 'provinsi',
    created_at: 'created_at'
  };

  export type KulinersScalarFieldEnum = (typeof KulinersScalarFieldEnum)[keyof typeof KulinersScalarFieldEnum]


  export const Rekomendasi_destinasiScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    list_kategori: 'list_kategori',
    created_at: 'created_at'
  };

  export type Rekomendasi_destinasiScalarFieldEnum = (typeof Rekomendasi_destinasiScalarFieldEnum)[keyof typeof Rekomendasi_destinasiScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    gender: 'gender',
    password: 'password',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type destinationsWhereInput = {
    AND?: destinationsWhereInput | destinationsWhereInput[]
    OR?: destinationsWhereInput[]
    NOT?: destinationsWhereInput | destinationsWhereInput[]
    id?: IntFilter<"destinations"> | number
    url_maps?: StringNullableFilter<"destinations"> | string | null
    name?: StringNullableFilter<"destinations"> | string | null
    rating?: DecimalNullableFilter<"destinations"> | Decimal | DecimalJsLike | number | string | null
    tipe?: StringNullableFilter<"destinations"> | string | null
    url_gambar?: StringNullableFilter<"destinations"> | string | null
    provinsi?: StringNullableFilter<"destinations"> | string | null
    latitutde?: DecimalNullableFilter<"destinations"> | Decimal | DecimalJsLike | number | string | null
    longtitude?: DecimalNullableFilter<"destinations"> | Decimal | DecimalJsLike | number | string | null
    kategori?: StringNullableFilter<"destinations"> | string | null
    created_at?: DateTimeFilter<"destinations"> | Date | string
  }

  export type destinationsOrderByWithRelationInput = {
    id?: SortOrder
    url_maps?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    tipe?: SortOrderInput | SortOrder
    url_gambar?: SortOrderInput | SortOrder
    provinsi?: SortOrderInput | SortOrder
    latitutde?: SortOrderInput | SortOrder
    longtitude?: SortOrderInput | SortOrder
    kategori?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type destinationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: destinationsWhereInput | destinationsWhereInput[]
    OR?: destinationsWhereInput[]
    NOT?: destinationsWhereInput | destinationsWhereInput[]
    url_maps?: StringNullableFilter<"destinations"> | string | null
    name?: StringNullableFilter<"destinations"> | string | null
    rating?: DecimalNullableFilter<"destinations"> | Decimal | DecimalJsLike | number | string | null
    tipe?: StringNullableFilter<"destinations"> | string | null
    url_gambar?: StringNullableFilter<"destinations"> | string | null
    provinsi?: StringNullableFilter<"destinations"> | string | null
    latitutde?: DecimalNullableFilter<"destinations"> | Decimal | DecimalJsLike | number | string | null
    longtitude?: DecimalNullableFilter<"destinations"> | Decimal | DecimalJsLike | number | string | null
    kategori?: StringNullableFilter<"destinations"> | string | null
    created_at?: DateTimeFilter<"destinations"> | Date | string
  }, "id">

  export type destinationsOrderByWithAggregationInput = {
    id?: SortOrder
    url_maps?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    tipe?: SortOrderInput | SortOrder
    url_gambar?: SortOrderInput | SortOrder
    provinsi?: SortOrderInput | SortOrder
    latitutde?: SortOrderInput | SortOrder
    longtitude?: SortOrderInput | SortOrder
    kategori?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: destinationsCountOrderByAggregateInput
    _avg?: destinationsAvgOrderByAggregateInput
    _max?: destinationsMaxOrderByAggregateInput
    _min?: destinationsMinOrderByAggregateInput
    _sum?: destinationsSumOrderByAggregateInput
  }

  export type destinationsScalarWhereWithAggregatesInput = {
    AND?: destinationsScalarWhereWithAggregatesInput | destinationsScalarWhereWithAggregatesInput[]
    OR?: destinationsScalarWhereWithAggregatesInput[]
    NOT?: destinationsScalarWhereWithAggregatesInput | destinationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"destinations"> | number
    url_maps?: StringNullableWithAggregatesFilter<"destinations"> | string | null
    name?: StringNullableWithAggregatesFilter<"destinations"> | string | null
    rating?: DecimalNullableWithAggregatesFilter<"destinations"> | Decimal | DecimalJsLike | number | string | null
    tipe?: StringNullableWithAggregatesFilter<"destinations"> | string | null
    url_gambar?: StringNullableWithAggregatesFilter<"destinations"> | string | null
    provinsi?: StringNullableWithAggregatesFilter<"destinations"> | string | null
    latitutde?: DecimalNullableWithAggregatesFilter<"destinations"> | Decimal | DecimalJsLike | number | string | null
    longtitude?: DecimalNullableWithAggregatesFilter<"destinations"> | Decimal | DecimalJsLike | number | string | null
    kategori?: StringNullableWithAggregatesFilter<"destinations"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"destinations"> | Date | string
  }

  export type kulinersWhereInput = {
    AND?: kulinersWhereInput | kulinersWhereInput[]
    OR?: kulinersWhereInput[]
    NOT?: kulinersWhereInput | kulinersWhereInput[]
    id?: IntFilter<"kuliners"> | number
    judul?: StringNullableFilter<"kuliners"> | string | null
    deskripsi?: StringNullableFilter<"kuliners"> | string | null
    gambar?: StringNullableFilter<"kuliners"> | string | null
    tipe?: StringNullableFilter<"kuliners"> | string | null
    provinsi?: StringNullableFilter<"kuliners"> | string | null
    created_at?: DateTimeFilter<"kuliners"> | Date | string
  }

  export type kulinersOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    gambar?: SortOrderInput | SortOrder
    tipe?: SortOrderInput | SortOrder
    provinsi?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type kulinersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: kulinersWhereInput | kulinersWhereInput[]
    OR?: kulinersWhereInput[]
    NOT?: kulinersWhereInput | kulinersWhereInput[]
    judul?: StringNullableFilter<"kuliners"> | string | null
    deskripsi?: StringNullableFilter<"kuliners"> | string | null
    gambar?: StringNullableFilter<"kuliners"> | string | null
    tipe?: StringNullableFilter<"kuliners"> | string | null
    provinsi?: StringNullableFilter<"kuliners"> | string | null
    created_at?: DateTimeFilter<"kuliners"> | Date | string
  }, "id">

  export type kulinersOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    gambar?: SortOrderInput | SortOrder
    tipe?: SortOrderInput | SortOrder
    provinsi?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: kulinersCountOrderByAggregateInput
    _avg?: kulinersAvgOrderByAggregateInput
    _max?: kulinersMaxOrderByAggregateInput
    _min?: kulinersMinOrderByAggregateInput
    _sum?: kulinersSumOrderByAggregateInput
  }

  export type kulinersScalarWhereWithAggregatesInput = {
    AND?: kulinersScalarWhereWithAggregatesInput | kulinersScalarWhereWithAggregatesInput[]
    OR?: kulinersScalarWhereWithAggregatesInput[]
    NOT?: kulinersScalarWhereWithAggregatesInput | kulinersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"kuliners"> | number
    judul?: StringNullableWithAggregatesFilter<"kuliners"> | string | null
    deskripsi?: StringNullableWithAggregatesFilter<"kuliners"> | string | null
    gambar?: StringNullableWithAggregatesFilter<"kuliners"> | string | null
    tipe?: StringNullableWithAggregatesFilter<"kuliners"> | string | null
    provinsi?: StringNullableWithAggregatesFilter<"kuliners"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"kuliners"> | Date | string
  }

  export type rekomendasi_destinasiWhereInput = {
    AND?: rekomendasi_destinasiWhereInput | rekomendasi_destinasiWhereInput[]
    OR?: rekomendasi_destinasiWhereInput[]
    NOT?: rekomendasi_destinasiWhereInput | rekomendasi_destinasiWhereInput[]
    id?: IntFilter<"rekomendasi_destinasi"> | number
    user_id?: IntFilter<"rekomendasi_destinasi"> | number
    name?: StringNullableFilter<"rekomendasi_destinasi"> | string | null
    list_kategori?: StringFilter<"rekomendasi_destinasi"> | string
    created_at?: DateTimeFilter<"rekomendasi_destinasi"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type rekomendasi_destinasiOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    list_kategori?: SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type rekomendasi_destinasiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rekomendasi_destinasiWhereInput | rekomendasi_destinasiWhereInput[]
    OR?: rekomendasi_destinasiWhereInput[]
    NOT?: rekomendasi_destinasiWhereInput | rekomendasi_destinasiWhereInput[]
    user_id?: IntFilter<"rekomendasi_destinasi"> | number
    name?: StringNullableFilter<"rekomendasi_destinasi"> | string | null
    list_kategori?: StringFilter<"rekomendasi_destinasi"> | string
    created_at?: DateTimeFilter<"rekomendasi_destinasi"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type rekomendasi_destinasiOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    list_kategori?: SortOrder
    created_at?: SortOrder
    _count?: rekomendasi_destinasiCountOrderByAggregateInput
    _avg?: rekomendasi_destinasiAvgOrderByAggregateInput
    _max?: rekomendasi_destinasiMaxOrderByAggregateInput
    _min?: rekomendasi_destinasiMinOrderByAggregateInput
    _sum?: rekomendasi_destinasiSumOrderByAggregateInput
  }

  export type rekomendasi_destinasiScalarWhereWithAggregatesInput = {
    AND?: rekomendasi_destinasiScalarWhereWithAggregatesInput | rekomendasi_destinasiScalarWhereWithAggregatesInput[]
    OR?: rekomendasi_destinasiScalarWhereWithAggregatesInput[]
    NOT?: rekomendasi_destinasiScalarWhereWithAggregatesInput | rekomendasi_destinasiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rekomendasi_destinasi"> | number
    user_id?: IntWithAggregatesFilter<"rekomendasi_destinasi"> | number
    name?: StringNullableWithAggregatesFilter<"rekomendasi_destinasi"> | string | null
    list_kategori?: StringWithAggregatesFilter<"rekomendasi_destinasi"> | string
    created_at?: DateTimeWithAggregatesFilter<"rekomendasi_destinasi"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    gender?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    rekomendasi_destinasi?: Rekomendasi_destinasiListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    created_at?: SortOrder
    rekomendasi_destinasi?: rekomendasi_destinasiOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    gender?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    rekomendasi_destinasi?: Rekomendasi_destinasiListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    gender?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type destinationsCreateInput = {
    url_maps?: string | null
    name?: string | null
    rating?: Decimal | DecimalJsLike | number | string | null
    tipe?: string | null
    url_gambar?: string | null
    provinsi?: string | null
    latitutde?: Decimal | DecimalJsLike | number | string | null
    longtitude?: Decimal | DecimalJsLike | number | string | null
    kategori?: string | null
    created_at: Date | string
  }

  export type destinationsUncheckedCreateInput = {
    id?: number
    url_maps?: string | null
    name?: string | null
    rating?: Decimal | DecimalJsLike | number | string | null
    tipe?: string | null
    url_gambar?: string | null
    provinsi?: string | null
    latitutde?: Decimal | DecimalJsLike | number | string | null
    longtitude?: Decimal | DecimalJsLike | number | string | null
    kategori?: string | null
    created_at: Date | string
  }

  export type destinationsUpdateInput = {
    url_maps?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipe?: NullableStringFieldUpdateOperationsInput | string | null
    url_gambar?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    latitutde?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longtitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type destinationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_maps?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipe?: NullableStringFieldUpdateOperationsInput | string | null
    url_gambar?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    latitutde?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longtitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type destinationsCreateManyInput = {
    id?: number
    url_maps?: string | null
    name?: string | null
    rating?: Decimal | DecimalJsLike | number | string | null
    tipe?: string | null
    url_gambar?: string | null
    provinsi?: string | null
    latitutde?: Decimal | DecimalJsLike | number | string | null
    longtitude?: Decimal | DecimalJsLike | number | string | null
    kategori?: string | null
    created_at: Date | string
  }

  export type destinationsUpdateManyMutationInput = {
    url_maps?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipe?: NullableStringFieldUpdateOperationsInput | string | null
    url_gambar?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    latitutde?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longtitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type destinationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_maps?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipe?: NullableStringFieldUpdateOperationsInput | string | null
    url_gambar?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    latitutde?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longtitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kulinersCreateInput = {
    judul?: string | null
    deskripsi?: string | null
    gambar?: string | null
    tipe?: string | null
    provinsi?: string | null
    created_at: Date | string
  }

  export type kulinersUncheckedCreateInput = {
    id?: number
    judul?: string | null
    deskripsi?: string | null
    gambar?: string | null
    tipe?: string | null
    provinsi?: string | null
    created_at: Date | string
  }

  export type kulinersUpdateInput = {
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    tipe?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kulinersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    tipe?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kulinersCreateManyInput = {
    id?: number
    judul?: string | null
    deskripsi?: string | null
    gambar?: string | null
    tipe?: string | null
    provinsi?: string | null
    created_at: Date | string
  }

  export type kulinersUpdateManyMutationInput = {
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    tipe?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kulinersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    tipe?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rekomendasi_destinasiCreateInput = {
    name?: string | null
    list_kategori: string
    created_at: Date | string
    users?: usersCreateNestedOneWithoutRekomendasi_destinasiInput
  }

  export type rekomendasi_destinasiUncheckedCreateInput = {
    id?: number
    user_id: number
    name?: string | null
    list_kategori: string
    created_at: Date | string
  }

  export type rekomendasi_destinasiUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    list_kategori?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutRekomendasi_destinasiNestedInput
  }

  export type rekomendasi_destinasiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    list_kategori?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rekomendasi_destinasiCreateManyInput = {
    id?: number
    user_id: number
    name?: string | null
    list_kategori: string
    created_at: Date | string
  }

  export type rekomendasi_destinasiUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    list_kategori?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rekomendasi_destinasiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    list_kategori?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    name?: string | null
    email?: string | null
    gender?: string | null
    password?: string | null
    created_at: Date | string
    rekomendasi_destinasi?: rekomendasi_destinasiCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    gender?: string | null
    password?: string | null
    created_at: Date | string
    rekomendasi_destinasi?: rekomendasi_destinasiUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rekomendasi_destinasi?: rekomendasi_destinasiUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rekomendasi_destinasi?: rekomendasi_destinasiUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    gender?: string | null
    password?: string | null
    created_at: Date | string
  }

  export type usersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type destinationsCountOrderByAggregateInput = {
    id?: SortOrder
    url_maps?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    tipe?: SortOrder
    url_gambar?: SortOrder
    provinsi?: SortOrder
    latitutde?: SortOrder
    longtitude?: SortOrder
    kategori?: SortOrder
    created_at?: SortOrder
  }

  export type destinationsAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    latitutde?: SortOrder
    longtitude?: SortOrder
  }

  export type destinationsMaxOrderByAggregateInput = {
    id?: SortOrder
    url_maps?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    tipe?: SortOrder
    url_gambar?: SortOrder
    provinsi?: SortOrder
    latitutde?: SortOrder
    longtitude?: SortOrder
    kategori?: SortOrder
    created_at?: SortOrder
  }

  export type destinationsMinOrderByAggregateInput = {
    id?: SortOrder
    url_maps?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    tipe?: SortOrder
    url_gambar?: SortOrder
    provinsi?: SortOrder
    latitutde?: SortOrder
    longtitude?: SortOrder
    kategori?: SortOrder
    created_at?: SortOrder
  }

  export type destinationsSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    latitutde?: SortOrder
    longtitude?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type kulinersCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    tipe?: SortOrder
    provinsi?: SortOrder
    created_at?: SortOrder
  }

  export type kulinersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type kulinersMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    tipe?: SortOrder
    provinsi?: SortOrder
    created_at?: SortOrder
  }

  export type kulinersMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    tipe?: SortOrder
    provinsi?: SortOrder
    created_at?: SortOrder
  }

  export type kulinersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type rekomendasi_destinasiCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    list_kategori?: SortOrder
    created_at?: SortOrder
  }

  export type rekomendasi_destinasiAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type rekomendasi_destinasiMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    list_kategori?: SortOrder
    created_at?: SortOrder
  }

  export type rekomendasi_destinasiMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    list_kategori?: SortOrder
    created_at?: SortOrder
  }

  export type rekomendasi_destinasiSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Rekomendasi_destinasiListRelationFilter = {
    every?: rekomendasi_destinasiWhereInput
    some?: rekomendasi_destinasiWhereInput
    none?: rekomendasi_destinasiWhereInput
  }

  export type rekomendasi_destinasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutRekomendasi_destinasiInput = {
    create?: XOR<usersCreateWithoutRekomendasi_destinasiInput, usersUncheckedCreateWithoutRekomendasi_destinasiInput>
    connectOrCreate?: usersCreateOrConnectWithoutRekomendasi_destinasiInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type usersUpdateOneWithoutRekomendasi_destinasiNestedInput = {
    create?: XOR<usersCreateWithoutRekomendasi_destinasiInput, usersUncheckedCreateWithoutRekomendasi_destinasiInput>
    connectOrCreate?: usersCreateOrConnectWithoutRekomendasi_destinasiInput
    upsert?: usersUpsertWithoutRekomendasi_destinasiInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRekomendasi_destinasiInput, usersUpdateWithoutRekomendasi_destinasiInput>, usersUncheckedUpdateWithoutRekomendasi_destinasiInput>
  }

  export type rekomendasi_destinasiCreateNestedManyWithoutUsersInput = {
    create?: XOR<rekomendasi_destinasiCreateWithoutUsersInput, rekomendasi_destinasiUncheckedCreateWithoutUsersInput> | rekomendasi_destinasiCreateWithoutUsersInput[] | rekomendasi_destinasiUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rekomendasi_destinasiCreateOrConnectWithoutUsersInput | rekomendasi_destinasiCreateOrConnectWithoutUsersInput[]
    createMany?: rekomendasi_destinasiCreateManyUsersInputEnvelope
    connect?: rekomendasi_destinasiWhereUniqueInput | rekomendasi_destinasiWhereUniqueInput[]
  }

  export type rekomendasi_destinasiUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<rekomendasi_destinasiCreateWithoutUsersInput, rekomendasi_destinasiUncheckedCreateWithoutUsersInput> | rekomendasi_destinasiCreateWithoutUsersInput[] | rekomendasi_destinasiUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rekomendasi_destinasiCreateOrConnectWithoutUsersInput | rekomendasi_destinasiCreateOrConnectWithoutUsersInput[]
    createMany?: rekomendasi_destinasiCreateManyUsersInputEnvelope
    connect?: rekomendasi_destinasiWhereUniqueInput | rekomendasi_destinasiWhereUniqueInput[]
  }

  export type rekomendasi_destinasiUpdateManyWithoutUsersNestedInput = {
    create?: XOR<rekomendasi_destinasiCreateWithoutUsersInput, rekomendasi_destinasiUncheckedCreateWithoutUsersInput> | rekomendasi_destinasiCreateWithoutUsersInput[] | rekomendasi_destinasiUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rekomendasi_destinasiCreateOrConnectWithoutUsersInput | rekomendasi_destinasiCreateOrConnectWithoutUsersInput[]
    upsert?: rekomendasi_destinasiUpsertWithWhereUniqueWithoutUsersInput | rekomendasi_destinasiUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: rekomendasi_destinasiCreateManyUsersInputEnvelope
    set?: rekomendasi_destinasiWhereUniqueInput | rekomendasi_destinasiWhereUniqueInput[]
    disconnect?: rekomendasi_destinasiWhereUniqueInput | rekomendasi_destinasiWhereUniqueInput[]
    delete?: rekomendasi_destinasiWhereUniqueInput | rekomendasi_destinasiWhereUniqueInput[]
    connect?: rekomendasi_destinasiWhereUniqueInput | rekomendasi_destinasiWhereUniqueInput[]
    update?: rekomendasi_destinasiUpdateWithWhereUniqueWithoutUsersInput | rekomendasi_destinasiUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: rekomendasi_destinasiUpdateManyWithWhereWithoutUsersInput | rekomendasi_destinasiUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: rekomendasi_destinasiScalarWhereInput | rekomendasi_destinasiScalarWhereInput[]
  }

  export type rekomendasi_destinasiUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<rekomendasi_destinasiCreateWithoutUsersInput, rekomendasi_destinasiUncheckedCreateWithoutUsersInput> | rekomendasi_destinasiCreateWithoutUsersInput[] | rekomendasi_destinasiUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rekomendasi_destinasiCreateOrConnectWithoutUsersInput | rekomendasi_destinasiCreateOrConnectWithoutUsersInput[]
    upsert?: rekomendasi_destinasiUpsertWithWhereUniqueWithoutUsersInput | rekomendasi_destinasiUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: rekomendasi_destinasiCreateManyUsersInputEnvelope
    set?: rekomendasi_destinasiWhereUniqueInput | rekomendasi_destinasiWhereUniqueInput[]
    disconnect?: rekomendasi_destinasiWhereUniqueInput | rekomendasi_destinasiWhereUniqueInput[]
    delete?: rekomendasi_destinasiWhereUniqueInput | rekomendasi_destinasiWhereUniqueInput[]
    connect?: rekomendasi_destinasiWhereUniqueInput | rekomendasi_destinasiWhereUniqueInput[]
    update?: rekomendasi_destinasiUpdateWithWhereUniqueWithoutUsersInput | rekomendasi_destinasiUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: rekomendasi_destinasiUpdateManyWithWhereWithoutUsersInput | rekomendasi_destinasiUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: rekomendasi_destinasiScalarWhereInput | rekomendasi_destinasiScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type usersCreateWithoutRekomendasi_destinasiInput = {
    name?: string | null
    email?: string | null
    gender?: string | null
    password?: string | null
    created_at: Date | string
  }

  export type usersUncheckedCreateWithoutRekomendasi_destinasiInput = {
    id?: number
    name?: string | null
    email?: string | null
    gender?: string | null
    password?: string | null
    created_at: Date | string
  }

  export type usersCreateOrConnectWithoutRekomendasi_destinasiInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRekomendasi_destinasiInput, usersUncheckedCreateWithoutRekomendasi_destinasiInput>
  }

  export type usersUpsertWithoutRekomendasi_destinasiInput = {
    update: XOR<usersUpdateWithoutRekomendasi_destinasiInput, usersUncheckedUpdateWithoutRekomendasi_destinasiInput>
    create: XOR<usersCreateWithoutRekomendasi_destinasiInput, usersUncheckedCreateWithoutRekomendasi_destinasiInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRekomendasi_destinasiInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRekomendasi_destinasiInput, usersUncheckedUpdateWithoutRekomendasi_destinasiInput>
  }

  export type usersUpdateWithoutRekomendasi_destinasiInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateWithoutRekomendasi_destinasiInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rekomendasi_destinasiCreateWithoutUsersInput = {
    name?: string | null
    list_kategori: string
    created_at: Date | string
  }

  export type rekomendasi_destinasiUncheckedCreateWithoutUsersInput = {
    id?: number
    name?: string | null
    list_kategori: string
    created_at: Date | string
  }

  export type rekomendasi_destinasiCreateOrConnectWithoutUsersInput = {
    where: rekomendasi_destinasiWhereUniqueInput
    create: XOR<rekomendasi_destinasiCreateWithoutUsersInput, rekomendasi_destinasiUncheckedCreateWithoutUsersInput>
  }

  export type rekomendasi_destinasiCreateManyUsersInputEnvelope = {
    data: rekomendasi_destinasiCreateManyUsersInput | rekomendasi_destinasiCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type rekomendasi_destinasiUpsertWithWhereUniqueWithoutUsersInput = {
    where: rekomendasi_destinasiWhereUniqueInput
    update: XOR<rekomendasi_destinasiUpdateWithoutUsersInput, rekomendasi_destinasiUncheckedUpdateWithoutUsersInput>
    create: XOR<rekomendasi_destinasiCreateWithoutUsersInput, rekomendasi_destinasiUncheckedCreateWithoutUsersInput>
  }

  export type rekomendasi_destinasiUpdateWithWhereUniqueWithoutUsersInput = {
    where: rekomendasi_destinasiWhereUniqueInput
    data: XOR<rekomendasi_destinasiUpdateWithoutUsersInput, rekomendasi_destinasiUncheckedUpdateWithoutUsersInput>
  }

  export type rekomendasi_destinasiUpdateManyWithWhereWithoutUsersInput = {
    where: rekomendasi_destinasiScalarWhereInput
    data: XOR<rekomendasi_destinasiUpdateManyMutationInput, rekomendasi_destinasiUncheckedUpdateManyWithoutUsersInput>
  }

  export type rekomendasi_destinasiScalarWhereInput = {
    AND?: rekomendasi_destinasiScalarWhereInput | rekomendasi_destinasiScalarWhereInput[]
    OR?: rekomendasi_destinasiScalarWhereInput[]
    NOT?: rekomendasi_destinasiScalarWhereInput | rekomendasi_destinasiScalarWhereInput[]
    id?: IntFilter<"rekomendasi_destinasi"> | number
    user_id?: IntFilter<"rekomendasi_destinasi"> | number
    name?: StringNullableFilter<"rekomendasi_destinasi"> | string | null
    list_kategori?: StringFilter<"rekomendasi_destinasi"> | string
    created_at?: DateTimeFilter<"rekomendasi_destinasi"> | Date | string
  }

  export type rekomendasi_destinasiCreateManyUsersInput = {
    id?: number
    name?: string | null
    list_kategori: string
    created_at: Date | string
  }

  export type rekomendasi_destinasiUpdateWithoutUsersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    list_kategori?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rekomendasi_destinasiUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    list_kategori?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rekomendasi_destinasiUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    list_kategori?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}