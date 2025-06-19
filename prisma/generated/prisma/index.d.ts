
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Dependent
 * 
 */
export type Dependent = $Result.DefaultSelection<Prisma.$DependentPayload>
/**
 * Model UserDependent
 * 
 */
export type UserDependent = $Result.DefaultSelection<Prisma.$UserDependentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RegistrationStep: {
  CREATE_FAMILY: 'CREATE_FAMILY',
  INVITE_OTHER_ADULTS: 'INVITE_OTHER_ADULTS',
  COMPLETE: 'COMPLETE'
};

export type RegistrationStep = (typeof RegistrationStep)[keyof typeof RegistrationStep]


export const UserRole: {
  ADMIN: 'ADMIN',
  PARENT: 'PARENT',
  TEACHER: 'TEACHER',
  SUPPORT: 'SUPPORT',
  CARER: 'CARER',
  MEDICAL: 'MEDICAL'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const RelationshipType: {
  PARENT: 'PARENT',
  TEACHER: 'TEACHER',
  SOCIAL_WORKER: 'SOCIAL_WORKER',
  DOCTER: 'DOCTER',
  NURSE: 'NURSE',
  GUARDIAN: 'GUARDIAN'
};

export type RelationshipType = (typeof RelationshipType)[keyof typeof RelationshipType]

}

export type RegistrationStep = $Enums.RegistrationStep

export const RegistrationStep: typeof $Enums.RegistrationStep

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type RelationshipType = $Enums.RelationshipType

export const RelationshipType: typeof $Enums.RelationshipType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dependent`: Exposes CRUD operations for the **Dependent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dependents
    * const dependents = await prisma.dependent.findMany()
    * ```
    */
  get dependent(): Prisma.DependentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDependent`: Exposes CRUD operations for the **UserDependent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDependents
    * const userDependents = await prisma.userDependent.findMany()
    * ```
    */
  get userDependent(): Prisma.UserDependentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    User: 'User',
    Dependent: 'Dependent',
    UserDependent: 'UserDependent'
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
      modelProps: "user" | "dependent" | "userDependent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Dependent: {
        payload: Prisma.$DependentPayload<ExtArgs>
        fields: Prisma.DependentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DependentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DependentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentPayload>
          }
          findFirst: {
            args: Prisma.DependentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DependentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentPayload>
          }
          findMany: {
            args: Prisma.DependentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentPayload>[]
          }
          create: {
            args: Prisma.DependentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentPayload>
          }
          createMany: {
            args: Prisma.DependentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DependentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentPayload>[]
          }
          delete: {
            args: Prisma.DependentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentPayload>
          }
          update: {
            args: Prisma.DependentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentPayload>
          }
          deleteMany: {
            args: Prisma.DependentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DependentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DependentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentPayload>[]
          }
          upsert: {
            args: Prisma.DependentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DependentPayload>
          }
          aggregate: {
            args: Prisma.DependentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDependent>
          }
          groupBy: {
            args: Prisma.DependentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DependentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DependentCountArgs<ExtArgs>
            result: $Utils.Optional<DependentCountAggregateOutputType> | number
          }
        }
      }
      UserDependent: {
        payload: Prisma.$UserDependentPayload<ExtArgs>
        fields: Prisma.UserDependentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDependentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDependentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDependentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDependentPayload>
          }
          findFirst: {
            args: Prisma.UserDependentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDependentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDependentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDependentPayload>
          }
          findMany: {
            args: Prisma.UserDependentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDependentPayload>[]
          }
          create: {
            args: Prisma.UserDependentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDependentPayload>
          }
          createMany: {
            args: Prisma.UserDependentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDependentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDependentPayload>[]
          }
          delete: {
            args: Prisma.UserDependentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDependentPayload>
          }
          update: {
            args: Prisma.UserDependentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDependentPayload>
          }
          deleteMany: {
            args: Prisma.UserDependentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDependentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDependentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDependentPayload>[]
          }
          upsert: {
            args: Prisma.UserDependentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDependentPayload>
          }
          aggregate: {
            args: Prisma.UserDependentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDependent>
          }
          groupBy: {
            args: Prisma.UserDependentGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDependentGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDependentCountArgs<ExtArgs>
            result: $Utils.Optional<UserDependentCountAggregateOutputType> | number
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
    user?: UserOmit
    dependent?: DependentOmit
    userDependent?: UserDependentOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    dependents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dependents?: boolean | UserCountOutputTypeCountDependentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDependentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDependentWhereInput
  }


  /**
   * Count Type DependentCountOutputType
   */

  export type DependentCountOutputType = {
    users: number
  }

  export type DependentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DependentCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DependentCountOutputType without action
   */
  export type DependentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DependentCountOutputType
     */
    select?: DependentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DependentCountOutputType without action
   */
  export type DependentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDependentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    surname: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    registrationStep: $Enums.RegistrationStep | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    surname: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    registrationStep: $Enums.RegistrationStep | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    surname: number
    email: number
    password: number
    phoneNumber: number
    registrationStep: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    surname?: true
    email?: true
    password?: true
    phoneNumber?: true
    registrationStep?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    surname?: true
    email?: true
    password?: true
    phoneNumber?: true
    registrationStep?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    surname?: true
    email?: true
    password?: true
    phoneNumber?: true
    registrationStep?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    surname: string
    email: string
    password: string
    phoneNumber: string
    registrationStep: $Enums.RegistrationStep
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    surname?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    registrationStep?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dependents?: boolean | User$dependentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    surname?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    registrationStep?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    surname?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    registrationStep?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    surname?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    registrationStep?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "surname" | "email" | "password" | "phoneNumber" | "registrationStep" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dependents?: boolean | User$dependentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      dependents: Prisma.$UserDependentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      surname: string
      email: string
      password: string
      phoneNumber: string
      registrationStep: $Enums.RegistrationStep
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dependents<T extends User$dependentsArgs<ExtArgs> = {}>(args?: Subset<T, User$dependentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDependentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly registrationStep: FieldRef<"User", 'RegistrationStep'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.dependents
   */
  export type User$dependentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDependent
     */
    select?: UserDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDependent
     */
    omit?: UserDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDependentInclude<ExtArgs> | null
    where?: UserDependentWhereInput
    orderBy?: UserDependentOrderByWithRelationInput | UserDependentOrderByWithRelationInput[]
    cursor?: UserDependentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDependentScalarFieldEnum | UserDependentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Dependent
   */

  export type AggregateDependent = {
    _count: DependentCountAggregateOutputType | null
    _avg: DependentAvgAggregateOutputType | null
    _sum: DependentSumAggregateOutputType | null
    _min: DependentMinAggregateOutputType | null
    _max: DependentMaxAggregateOutputType | null
  }

  export type DependentAvgAggregateOutputType = {
    id: number | null
  }

  export type DependentSumAggregateOutputType = {
    id: number | null
  }

  export type DependentMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    surname: string | null
    schoolName: string | null
    dateOfBirth: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DependentMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    surname: string | null
    schoolName: string | null
    dateOfBirth: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DependentCountAggregateOutputType = {
    id: number
    firstName: number
    surname: number
    schoolName: number
    dateOfBirth: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DependentAvgAggregateInputType = {
    id?: true
  }

  export type DependentSumAggregateInputType = {
    id?: true
  }

  export type DependentMinAggregateInputType = {
    id?: true
    firstName?: true
    surname?: true
    schoolName?: true
    dateOfBirth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DependentMaxAggregateInputType = {
    id?: true
    firstName?: true
    surname?: true
    schoolName?: true
    dateOfBirth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DependentCountAggregateInputType = {
    id?: true
    firstName?: true
    surname?: true
    schoolName?: true
    dateOfBirth?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DependentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dependent to aggregate.
     */
    where?: DependentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependents to fetch.
     */
    orderBy?: DependentOrderByWithRelationInput | DependentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DependentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dependents
    **/
    _count?: true | DependentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DependentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DependentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DependentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DependentMaxAggregateInputType
  }

  export type GetDependentAggregateType<T extends DependentAggregateArgs> = {
        [P in keyof T & keyof AggregateDependent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDependent[P]>
      : GetScalarType<T[P], AggregateDependent[P]>
  }




  export type DependentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DependentWhereInput
    orderBy?: DependentOrderByWithAggregationInput | DependentOrderByWithAggregationInput[]
    by: DependentScalarFieldEnum[] | DependentScalarFieldEnum
    having?: DependentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DependentCountAggregateInputType | true
    _avg?: DependentAvgAggregateInputType
    _sum?: DependentSumAggregateInputType
    _min?: DependentMinAggregateInputType
    _max?: DependentMaxAggregateInputType
  }

  export type DependentGroupByOutputType = {
    id: number
    firstName: string
    surname: string
    schoolName: string
    dateOfBirth: Date
    createdAt: Date
    updatedAt: Date
    _count: DependentCountAggregateOutputType | null
    _avg: DependentAvgAggregateOutputType | null
    _sum: DependentSumAggregateOutputType | null
    _min: DependentMinAggregateOutputType | null
    _max: DependentMaxAggregateOutputType | null
  }

  type GetDependentGroupByPayload<T extends DependentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DependentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DependentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DependentGroupByOutputType[P]>
            : GetScalarType<T[P], DependentGroupByOutputType[P]>
        }
      >
    >


  export type DependentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    surname?: boolean
    schoolName?: boolean
    dateOfBirth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Dependent$usersArgs<ExtArgs>
    _count?: boolean | DependentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dependent"]>

  export type DependentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    surname?: boolean
    schoolName?: boolean
    dateOfBirth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dependent"]>

  export type DependentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    surname?: boolean
    schoolName?: boolean
    dateOfBirth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dependent"]>

  export type DependentSelectScalar = {
    id?: boolean
    firstName?: boolean
    surname?: boolean
    schoolName?: boolean
    dateOfBirth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DependentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "surname" | "schoolName" | "dateOfBirth" | "createdAt" | "updatedAt", ExtArgs["result"]["dependent"]>
  export type DependentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Dependent$usersArgs<ExtArgs>
    _count?: boolean | DependentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DependentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DependentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DependentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dependent"
    objects: {
      users: Prisma.$UserDependentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      surname: string
      schoolName: string
      dateOfBirth: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dependent"]>
    composites: {}
  }

  type DependentGetPayload<S extends boolean | null | undefined | DependentDefaultArgs> = $Result.GetResult<Prisma.$DependentPayload, S>

  type DependentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DependentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DependentCountAggregateInputType | true
    }

  export interface DependentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dependent'], meta: { name: 'Dependent' } }
    /**
     * Find zero or one Dependent that matches the filter.
     * @param {DependentFindUniqueArgs} args - Arguments to find a Dependent
     * @example
     * // Get one Dependent
     * const dependent = await prisma.dependent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DependentFindUniqueArgs>(args: SelectSubset<T, DependentFindUniqueArgs<ExtArgs>>): Prisma__DependentClient<$Result.GetResult<Prisma.$DependentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dependent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DependentFindUniqueOrThrowArgs} args - Arguments to find a Dependent
     * @example
     * // Get one Dependent
     * const dependent = await prisma.dependent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DependentFindUniqueOrThrowArgs>(args: SelectSubset<T, DependentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DependentClient<$Result.GetResult<Prisma.$DependentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dependent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependentFindFirstArgs} args - Arguments to find a Dependent
     * @example
     * // Get one Dependent
     * const dependent = await prisma.dependent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DependentFindFirstArgs>(args?: SelectSubset<T, DependentFindFirstArgs<ExtArgs>>): Prisma__DependentClient<$Result.GetResult<Prisma.$DependentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dependent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependentFindFirstOrThrowArgs} args - Arguments to find a Dependent
     * @example
     * // Get one Dependent
     * const dependent = await prisma.dependent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DependentFindFirstOrThrowArgs>(args?: SelectSubset<T, DependentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DependentClient<$Result.GetResult<Prisma.$DependentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dependents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dependents
     * const dependents = await prisma.dependent.findMany()
     * 
     * // Get first 10 Dependents
     * const dependents = await prisma.dependent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dependentWithIdOnly = await prisma.dependent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DependentFindManyArgs>(args?: SelectSubset<T, DependentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DependentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dependent.
     * @param {DependentCreateArgs} args - Arguments to create a Dependent.
     * @example
     * // Create one Dependent
     * const Dependent = await prisma.dependent.create({
     *   data: {
     *     // ... data to create a Dependent
     *   }
     * })
     * 
     */
    create<T extends DependentCreateArgs>(args: SelectSubset<T, DependentCreateArgs<ExtArgs>>): Prisma__DependentClient<$Result.GetResult<Prisma.$DependentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dependents.
     * @param {DependentCreateManyArgs} args - Arguments to create many Dependents.
     * @example
     * // Create many Dependents
     * const dependent = await prisma.dependent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DependentCreateManyArgs>(args?: SelectSubset<T, DependentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dependents and returns the data saved in the database.
     * @param {DependentCreateManyAndReturnArgs} args - Arguments to create many Dependents.
     * @example
     * // Create many Dependents
     * const dependent = await prisma.dependent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dependents and only return the `id`
     * const dependentWithIdOnly = await prisma.dependent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DependentCreateManyAndReturnArgs>(args?: SelectSubset<T, DependentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DependentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dependent.
     * @param {DependentDeleteArgs} args - Arguments to delete one Dependent.
     * @example
     * // Delete one Dependent
     * const Dependent = await prisma.dependent.delete({
     *   where: {
     *     // ... filter to delete one Dependent
     *   }
     * })
     * 
     */
    delete<T extends DependentDeleteArgs>(args: SelectSubset<T, DependentDeleteArgs<ExtArgs>>): Prisma__DependentClient<$Result.GetResult<Prisma.$DependentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dependent.
     * @param {DependentUpdateArgs} args - Arguments to update one Dependent.
     * @example
     * // Update one Dependent
     * const dependent = await prisma.dependent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DependentUpdateArgs>(args: SelectSubset<T, DependentUpdateArgs<ExtArgs>>): Prisma__DependentClient<$Result.GetResult<Prisma.$DependentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dependents.
     * @param {DependentDeleteManyArgs} args - Arguments to filter Dependents to delete.
     * @example
     * // Delete a few Dependents
     * const { count } = await prisma.dependent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DependentDeleteManyArgs>(args?: SelectSubset<T, DependentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dependents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dependents
     * const dependent = await prisma.dependent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DependentUpdateManyArgs>(args: SelectSubset<T, DependentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dependents and returns the data updated in the database.
     * @param {DependentUpdateManyAndReturnArgs} args - Arguments to update many Dependents.
     * @example
     * // Update many Dependents
     * const dependent = await prisma.dependent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dependents and only return the `id`
     * const dependentWithIdOnly = await prisma.dependent.updateManyAndReturn({
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
    updateManyAndReturn<T extends DependentUpdateManyAndReturnArgs>(args: SelectSubset<T, DependentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DependentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dependent.
     * @param {DependentUpsertArgs} args - Arguments to update or create a Dependent.
     * @example
     * // Update or create a Dependent
     * const dependent = await prisma.dependent.upsert({
     *   create: {
     *     // ... data to create a Dependent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dependent we want to update
     *   }
     * })
     */
    upsert<T extends DependentUpsertArgs>(args: SelectSubset<T, DependentUpsertArgs<ExtArgs>>): Prisma__DependentClient<$Result.GetResult<Prisma.$DependentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dependents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependentCountArgs} args - Arguments to filter Dependents to count.
     * @example
     * // Count the number of Dependents
     * const count = await prisma.dependent.count({
     *   where: {
     *     // ... the filter for the Dependents we want to count
     *   }
     * })
    **/
    count<T extends DependentCountArgs>(
      args?: Subset<T, DependentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DependentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dependent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DependentAggregateArgs>(args: Subset<T, DependentAggregateArgs>): Prisma.PrismaPromise<GetDependentAggregateType<T>>

    /**
     * Group by Dependent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependentGroupByArgs} args - Group by arguments.
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
      T extends DependentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DependentGroupByArgs['orderBy'] }
        : { orderBy?: DependentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DependentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDependentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dependent model
   */
  readonly fields: DependentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dependent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DependentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Dependent$usersArgs<ExtArgs> = {}>(args?: Subset<T, Dependent$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDependentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dependent model
   */
  interface DependentFieldRefs {
    readonly id: FieldRef<"Dependent", 'Int'>
    readonly firstName: FieldRef<"Dependent", 'String'>
    readonly surname: FieldRef<"Dependent", 'String'>
    readonly schoolName: FieldRef<"Dependent", 'String'>
    readonly dateOfBirth: FieldRef<"Dependent", 'DateTime'>
    readonly createdAt: FieldRef<"Dependent", 'DateTime'>
    readonly updatedAt: FieldRef<"Dependent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dependent findUnique
   */
  export type DependentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependent
     */
    select?: DependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependent
     */
    omit?: DependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependentInclude<ExtArgs> | null
    /**
     * Filter, which Dependent to fetch.
     */
    where: DependentWhereUniqueInput
  }

  /**
   * Dependent findUniqueOrThrow
   */
  export type DependentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependent
     */
    select?: DependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependent
     */
    omit?: DependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependentInclude<ExtArgs> | null
    /**
     * Filter, which Dependent to fetch.
     */
    where: DependentWhereUniqueInput
  }

  /**
   * Dependent findFirst
   */
  export type DependentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependent
     */
    select?: DependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependent
     */
    omit?: DependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependentInclude<ExtArgs> | null
    /**
     * Filter, which Dependent to fetch.
     */
    where?: DependentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependents to fetch.
     */
    orderBy?: DependentOrderByWithRelationInput | DependentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dependents.
     */
    cursor?: DependentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dependents.
     */
    distinct?: DependentScalarFieldEnum | DependentScalarFieldEnum[]
  }

  /**
   * Dependent findFirstOrThrow
   */
  export type DependentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependent
     */
    select?: DependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependent
     */
    omit?: DependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependentInclude<ExtArgs> | null
    /**
     * Filter, which Dependent to fetch.
     */
    where?: DependentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependents to fetch.
     */
    orderBy?: DependentOrderByWithRelationInput | DependentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dependents.
     */
    cursor?: DependentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dependents.
     */
    distinct?: DependentScalarFieldEnum | DependentScalarFieldEnum[]
  }

  /**
   * Dependent findMany
   */
  export type DependentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependent
     */
    select?: DependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependent
     */
    omit?: DependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependentInclude<ExtArgs> | null
    /**
     * Filter, which Dependents to fetch.
     */
    where?: DependentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dependents to fetch.
     */
    orderBy?: DependentOrderByWithRelationInput | DependentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dependents.
     */
    cursor?: DependentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dependents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dependents.
     */
    skip?: number
    distinct?: DependentScalarFieldEnum | DependentScalarFieldEnum[]
  }

  /**
   * Dependent create
   */
  export type DependentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependent
     */
    select?: DependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependent
     */
    omit?: DependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependentInclude<ExtArgs> | null
    /**
     * The data needed to create a Dependent.
     */
    data: XOR<DependentCreateInput, DependentUncheckedCreateInput>
  }

  /**
   * Dependent createMany
   */
  export type DependentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dependents.
     */
    data: DependentCreateManyInput | DependentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dependent createManyAndReturn
   */
  export type DependentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependent
     */
    select?: DependentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dependent
     */
    omit?: DependentOmit<ExtArgs> | null
    /**
     * The data used to create many Dependents.
     */
    data: DependentCreateManyInput | DependentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dependent update
   */
  export type DependentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependent
     */
    select?: DependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependent
     */
    omit?: DependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependentInclude<ExtArgs> | null
    /**
     * The data needed to update a Dependent.
     */
    data: XOR<DependentUpdateInput, DependentUncheckedUpdateInput>
    /**
     * Choose, which Dependent to update.
     */
    where: DependentWhereUniqueInput
  }

  /**
   * Dependent updateMany
   */
  export type DependentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dependents.
     */
    data: XOR<DependentUpdateManyMutationInput, DependentUncheckedUpdateManyInput>
    /**
     * Filter which Dependents to update
     */
    where?: DependentWhereInput
    /**
     * Limit how many Dependents to update.
     */
    limit?: number
  }

  /**
   * Dependent updateManyAndReturn
   */
  export type DependentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependent
     */
    select?: DependentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dependent
     */
    omit?: DependentOmit<ExtArgs> | null
    /**
     * The data used to update Dependents.
     */
    data: XOR<DependentUpdateManyMutationInput, DependentUncheckedUpdateManyInput>
    /**
     * Filter which Dependents to update
     */
    where?: DependentWhereInput
    /**
     * Limit how many Dependents to update.
     */
    limit?: number
  }

  /**
   * Dependent upsert
   */
  export type DependentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependent
     */
    select?: DependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependent
     */
    omit?: DependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependentInclude<ExtArgs> | null
    /**
     * The filter to search for the Dependent to update in case it exists.
     */
    where: DependentWhereUniqueInput
    /**
     * In case the Dependent found by the `where` argument doesn't exist, create a new Dependent with this data.
     */
    create: XOR<DependentCreateInput, DependentUncheckedCreateInput>
    /**
     * In case the Dependent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DependentUpdateInput, DependentUncheckedUpdateInput>
  }

  /**
   * Dependent delete
   */
  export type DependentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependent
     */
    select?: DependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependent
     */
    omit?: DependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependentInclude<ExtArgs> | null
    /**
     * Filter which Dependent to delete.
     */
    where: DependentWhereUniqueInput
  }

  /**
   * Dependent deleteMany
   */
  export type DependentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dependents to delete
     */
    where?: DependentWhereInput
    /**
     * Limit how many Dependents to delete.
     */
    limit?: number
  }

  /**
   * Dependent.users
   */
  export type Dependent$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDependent
     */
    select?: UserDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDependent
     */
    omit?: UserDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDependentInclude<ExtArgs> | null
    where?: UserDependentWhereInput
    orderBy?: UserDependentOrderByWithRelationInput | UserDependentOrderByWithRelationInput[]
    cursor?: UserDependentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDependentScalarFieldEnum | UserDependentScalarFieldEnum[]
  }

  /**
   * Dependent without action
   */
  export type DependentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dependent
     */
    select?: DependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dependent
     */
    omit?: DependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DependentInclude<ExtArgs> | null
  }


  /**
   * Model UserDependent
   */

  export type AggregateUserDependent = {
    _count: UserDependentCountAggregateOutputType | null
    _avg: UserDependentAvgAggregateOutputType | null
    _sum: UserDependentSumAggregateOutputType | null
    _min: UserDependentMinAggregateOutputType | null
    _max: UserDependentMaxAggregateOutputType | null
  }

  export type UserDependentAvgAggregateOutputType = {
    userId: number | null
    dependentId: number | null
  }

  export type UserDependentSumAggregateOutputType = {
    userId: number | null
    dependentId: number | null
  }

  export type UserDependentMinAggregateOutputType = {
    userId: number | null
    dependentId: number | null
    relationship: $Enums.RelationshipType | null
  }

  export type UserDependentMaxAggregateOutputType = {
    userId: number | null
    dependentId: number | null
    relationship: $Enums.RelationshipType | null
  }

  export type UserDependentCountAggregateOutputType = {
    userId: number
    dependentId: number
    relationship: number
    _all: number
  }


  export type UserDependentAvgAggregateInputType = {
    userId?: true
    dependentId?: true
  }

  export type UserDependentSumAggregateInputType = {
    userId?: true
    dependentId?: true
  }

  export type UserDependentMinAggregateInputType = {
    userId?: true
    dependentId?: true
    relationship?: true
  }

  export type UserDependentMaxAggregateInputType = {
    userId?: true
    dependentId?: true
    relationship?: true
  }

  export type UserDependentCountAggregateInputType = {
    userId?: true
    dependentId?: true
    relationship?: true
    _all?: true
  }

  export type UserDependentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDependent to aggregate.
     */
    where?: UserDependentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDependents to fetch.
     */
    orderBy?: UserDependentOrderByWithRelationInput | UserDependentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDependentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDependents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDependents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDependents
    **/
    _count?: true | UserDependentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDependentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDependentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDependentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDependentMaxAggregateInputType
  }

  export type GetUserDependentAggregateType<T extends UserDependentAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDependent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDependent[P]>
      : GetScalarType<T[P], AggregateUserDependent[P]>
  }




  export type UserDependentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDependentWhereInput
    orderBy?: UserDependentOrderByWithAggregationInput | UserDependentOrderByWithAggregationInput[]
    by: UserDependentScalarFieldEnum[] | UserDependentScalarFieldEnum
    having?: UserDependentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDependentCountAggregateInputType | true
    _avg?: UserDependentAvgAggregateInputType
    _sum?: UserDependentSumAggregateInputType
    _min?: UserDependentMinAggregateInputType
    _max?: UserDependentMaxAggregateInputType
  }

  export type UserDependentGroupByOutputType = {
    userId: number
    dependentId: number
    relationship: $Enums.RelationshipType
    _count: UserDependentCountAggregateOutputType | null
    _avg: UserDependentAvgAggregateOutputType | null
    _sum: UserDependentSumAggregateOutputType | null
    _min: UserDependentMinAggregateOutputType | null
    _max: UserDependentMaxAggregateOutputType | null
  }

  type GetUserDependentGroupByPayload<T extends UserDependentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDependentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDependentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDependentGroupByOutputType[P]>
            : GetScalarType<T[P], UserDependentGroupByOutputType[P]>
        }
      >
    >


  export type UserDependentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    dependentId?: boolean
    relationship?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dependent?: boolean | DependentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDependent"]>

  export type UserDependentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    dependentId?: boolean
    relationship?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dependent?: boolean | DependentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDependent"]>

  export type UserDependentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    dependentId?: boolean
    relationship?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dependent?: boolean | DependentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDependent"]>

  export type UserDependentSelectScalar = {
    userId?: boolean
    dependentId?: boolean
    relationship?: boolean
  }

  export type UserDependentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "dependentId" | "relationship", ExtArgs["result"]["userDependent"]>
  export type UserDependentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dependent?: boolean | DependentDefaultArgs<ExtArgs>
  }
  export type UserDependentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dependent?: boolean | DependentDefaultArgs<ExtArgs>
  }
  export type UserDependentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dependent?: boolean | DependentDefaultArgs<ExtArgs>
  }

  export type $UserDependentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDependent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      dependent: Prisma.$DependentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      dependentId: number
      relationship: $Enums.RelationshipType
    }, ExtArgs["result"]["userDependent"]>
    composites: {}
  }

  type UserDependentGetPayload<S extends boolean | null | undefined | UserDependentDefaultArgs> = $Result.GetResult<Prisma.$UserDependentPayload, S>

  type UserDependentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDependentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDependentCountAggregateInputType | true
    }

  export interface UserDependentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDependent'], meta: { name: 'UserDependent' } }
    /**
     * Find zero or one UserDependent that matches the filter.
     * @param {UserDependentFindUniqueArgs} args - Arguments to find a UserDependent
     * @example
     * // Get one UserDependent
     * const userDependent = await prisma.userDependent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDependentFindUniqueArgs>(args: SelectSubset<T, UserDependentFindUniqueArgs<ExtArgs>>): Prisma__UserDependentClient<$Result.GetResult<Prisma.$UserDependentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDependent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDependentFindUniqueOrThrowArgs} args - Arguments to find a UserDependent
     * @example
     * // Get one UserDependent
     * const userDependent = await prisma.userDependent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDependentFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDependentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDependentClient<$Result.GetResult<Prisma.$UserDependentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDependent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDependentFindFirstArgs} args - Arguments to find a UserDependent
     * @example
     * // Get one UserDependent
     * const userDependent = await prisma.userDependent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDependentFindFirstArgs>(args?: SelectSubset<T, UserDependentFindFirstArgs<ExtArgs>>): Prisma__UserDependentClient<$Result.GetResult<Prisma.$UserDependentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDependent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDependentFindFirstOrThrowArgs} args - Arguments to find a UserDependent
     * @example
     * // Get one UserDependent
     * const userDependent = await prisma.userDependent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDependentFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDependentFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDependentClient<$Result.GetResult<Prisma.$UserDependentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDependents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDependentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDependents
     * const userDependents = await prisma.userDependent.findMany()
     * 
     * // Get first 10 UserDependents
     * const userDependents = await prisma.userDependent.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userDependentWithUserIdOnly = await prisma.userDependent.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserDependentFindManyArgs>(args?: SelectSubset<T, UserDependentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDependentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDependent.
     * @param {UserDependentCreateArgs} args - Arguments to create a UserDependent.
     * @example
     * // Create one UserDependent
     * const UserDependent = await prisma.userDependent.create({
     *   data: {
     *     // ... data to create a UserDependent
     *   }
     * })
     * 
     */
    create<T extends UserDependentCreateArgs>(args: SelectSubset<T, UserDependentCreateArgs<ExtArgs>>): Prisma__UserDependentClient<$Result.GetResult<Prisma.$UserDependentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDependents.
     * @param {UserDependentCreateManyArgs} args - Arguments to create many UserDependents.
     * @example
     * // Create many UserDependents
     * const userDependent = await prisma.userDependent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDependentCreateManyArgs>(args?: SelectSubset<T, UserDependentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDependents and returns the data saved in the database.
     * @param {UserDependentCreateManyAndReturnArgs} args - Arguments to create many UserDependents.
     * @example
     * // Create many UserDependents
     * const userDependent = await prisma.userDependent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDependents and only return the `userId`
     * const userDependentWithUserIdOnly = await prisma.userDependent.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDependentCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDependentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDependentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDependent.
     * @param {UserDependentDeleteArgs} args - Arguments to delete one UserDependent.
     * @example
     * // Delete one UserDependent
     * const UserDependent = await prisma.userDependent.delete({
     *   where: {
     *     // ... filter to delete one UserDependent
     *   }
     * })
     * 
     */
    delete<T extends UserDependentDeleteArgs>(args: SelectSubset<T, UserDependentDeleteArgs<ExtArgs>>): Prisma__UserDependentClient<$Result.GetResult<Prisma.$UserDependentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDependent.
     * @param {UserDependentUpdateArgs} args - Arguments to update one UserDependent.
     * @example
     * // Update one UserDependent
     * const userDependent = await prisma.userDependent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDependentUpdateArgs>(args: SelectSubset<T, UserDependentUpdateArgs<ExtArgs>>): Prisma__UserDependentClient<$Result.GetResult<Prisma.$UserDependentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDependents.
     * @param {UserDependentDeleteManyArgs} args - Arguments to filter UserDependents to delete.
     * @example
     * // Delete a few UserDependents
     * const { count } = await prisma.userDependent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDependentDeleteManyArgs>(args?: SelectSubset<T, UserDependentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDependents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDependentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDependents
     * const userDependent = await prisma.userDependent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDependentUpdateManyArgs>(args: SelectSubset<T, UserDependentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDependents and returns the data updated in the database.
     * @param {UserDependentUpdateManyAndReturnArgs} args - Arguments to update many UserDependents.
     * @example
     * // Update many UserDependents
     * const userDependent = await prisma.userDependent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDependents and only return the `userId`
     * const userDependentWithUserIdOnly = await prisma.userDependent.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserDependentUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDependentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDependentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDependent.
     * @param {UserDependentUpsertArgs} args - Arguments to update or create a UserDependent.
     * @example
     * // Update or create a UserDependent
     * const userDependent = await prisma.userDependent.upsert({
     *   create: {
     *     // ... data to create a UserDependent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDependent we want to update
     *   }
     * })
     */
    upsert<T extends UserDependentUpsertArgs>(args: SelectSubset<T, UserDependentUpsertArgs<ExtArgs>>): Prisma__UserDependentClient<$Result.GetResult<Prisma.$UserDependentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDependents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDependentCountArgs} args - Arguments to filter UserDependents to count.
     * @example
     * // Count the number of UserDependents
     * const count = await prisma.userDependent.count({
     *   where: {
     *     // ... the filter for the UserDependents we want to count
     *   }
     * })
    **/
    count<T extends UserDependentCountArgs>(
      args?: Subset<T, UserDependentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDependentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDependent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDependentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDependentAggregateArgs>(args: Subset<T, UserDependentAggregateArgs>): Prisma.PrismaPromise<GetUserDependentAggregateType<T>>

    /**
     * Group by UserDependent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDependentGroupByArgs} args - Group by arguments.
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
      T extends UserDependentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDependentGroupByArgs['orderBy'] }
        : { orderBy?: UserDependentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserDependentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDependentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDependent model
   */
  readonly fields: UserDependentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDependent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDependentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dependent<T extends DependentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DependentDefaultArgs<ExtArgs>>): Prisma__DependentClient<$Result.GetResult<Prisma.$DependentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserDependent model
   */
  interface UserDependentFieldRefs {
    readonly userId: FieldRef<"UserDependent", 'Int'>
    readonly dependentId: FieldRef<"UserDependent", 'Int'>
    readonly relationship: FieldRef<"UserDependent", 'RelationshipType'>
  }
    

  // Custom InputTypes
  /**
   * UserDependent findUnique
   */
  export type UserDependentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDependent
     */
    select?: UserDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDependent
     */
    omit?: UserDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDependentInclude<ExtArgs> | null
    /**
     * Filter, which UserDependent to fetch.
     */
    where: UserDependentWhereUniqueInput
  }

  /**
   * UserDependent findUniqueOrThrow
   */
  export type UserDependentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDependent
     */
    select?: UserDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDependent
     */
    omit?: UserDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDependentInclude<ExtArgs> | null
    /**
     * Filter, which UserDependent to fetch.
     */
    where: UserDependentWhereUniqueInput
  }

  /**
   * UserDependent findFirst
   */
  export type UserDependentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDependent
     */
    select?: UserDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDependent
     */
    omit?: UserDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDependentInclude<ExtArgs> | null
    /**
     * Filter, which UserDependent to fetch.
     */
    where?: UserDependentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDependents to fetch.
     */
    orderBy?: UserDependentOrderByWithRelationInput | UserDependentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDependents.
     */
    cursor?: UserDependentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDependents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDependents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDependents.
     */
    distinct?: UserDependentScalarFieldEnum | UserDependentScalarFieldEnum[]
  }

  /**
   * UserDependent findFirstOrThrow
   */
  export type UserDependentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDependent
     */
    select?: UserDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDependent
     */
    omit?: UserDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDependentInclude<ExtArgs> | null
    /**
     * Filter, which UserDependent to fetch.
     */
    where?: UserDependentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDependents to fetch.
     */
    orderBy?: UserDependentOrderByWithRelationInput | UserDependentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDependents.
     */
    cursor?: UserDependentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDependents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDependents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDependents.
     */
    distinct?: UserDependentScalarFieldEnum | UserDependentScalarFieldEnum[]
  }

  /**
   * UserDependent findMany
   */
  export type UserDependentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDependent
     */
    select?: UserDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDependent
     */
    omit?: UserDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDependentInclude<ExtArgs> | null
    /**
     * Filter, which UserDependents to fetch.
     */
    where?: UserDependentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDependents to fetch.
     */
    orderBy?: UserDependentOrderByWithRelationInput | UserDependentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDependents.
     */
    cursor?: UserDependentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDependents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDependents.
     */
    skip?: number
    distinct?: UserDependentScalarFieldEnum | UserDependentScalarFieldEnum[]
  }

  /**
   * UserDependent create
   */
  export type UserDependentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDependent
     */
    select?: UserDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDependent
     */
    omit?: UserDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDependentInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDependent.
     */
    data: XOR<UserDependentCreateInput, UserDependentUncheckedCreateInput>
  }

  /**
   * UserDependent createMany
   */
  export type UserDependentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDependents.
     */
    data: UserDependentCreateManyInput | UserDependentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDependent createManyAndReturn
   */
  export type UserDependentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDependent
     */
    select?: UserDependentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDependent
     */
    omit?: UserDependentOmit<ExtArgs> | null
    /**
     * The data used to create many UserDependents.
     */
    data: UserDependentCreateManyInput | UserDependentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDependentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDependent update
   */
  export type UserDependentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDependent
     */
    select?: UserDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDependent
     */
    omit?: UserDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDependentInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDependent.
     */
    data: XOR<UserDependentUpdateInput, UserDependentUncheckedUpdateInput>
    /**
     * Choose, which UserDependent to update.
     */
    where: UserDependentWhereUniqueInput
  }

  /**
   * UserDependent updateMany
   */
  export type UserDependentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDependents.
     */
    data: XOR<UserDependentUpdateManyMutationInput, UserDependentUncheckedUpdateManyInput>
    /**
     * Filter which UserDependents to update
     */
    where?: UserDependentWhereInput
    /**
     * Limit how many UserDependents to update.
     */
    limit?: number
  }

  /**
   * UserDependent updateManyAndReturn
   */
  export type UserDependentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDependent
     */
    select?: UserDependentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDependent
     */
    omit?: UserDependentOmit<ExtArgs> | null
    /**
     * The data used to update UserDependents.
     */
    data: XOR<UserDependentUpdateManyMutationInput, UserDependentUncheckedUpdateManyInput>
    /**
     * Filter which UserDependents to update
     */
    where?: UserDependentWhereInput
    /**
     * Limit how many UserDependents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDependentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDependent upsert
   */
  export type UserDependentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDependent
     */
    select?: UserDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDependent
     */
    omit?: UserDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDependentInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDependent to update in case it exists.
     */
    where: UserDependentWhereUniqueInput
    /**
     * In case the UserDependent found by the `where` argument doesn't exist, create a new UserDependent with this data.
     */
    create: XOR<UserDependentCreateInput, UserDependentUncheckedCreateInput>
    /**
     * In case the UserDependent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDependentUpdateInput, UserDependentUncheckedUpdateInput>
  }

  /**
   * UserDependent delete
   */
  export type UserDependentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDependent
     */
    select?: UserDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDependent
     */
    omit?: UserDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDependentInclude<ExtArgs> | null
    /**
     * Filter which UserDependent to delete.
     */
    where: UserDependentWhereUniqueInput
  }

  /**
   * UserDependent deleteMany
   */
  export type UserDependentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDependents to delete
     */
    where?: UserDependentWhereInput
    /**
     * Limit how many UserDependents to delete.
     */
    limit?: number
  }

  /**
   * UserDependent without action
   */
  export type UserDependentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDependent
     */
    select?: UserDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDependent
     */
    omit?: UserDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDependentInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    surname: 'surname',
    email: 'email',
    password: 'password',
    phoneNumber: 'phoneNumber',
    registrationStep: 'registrationStep',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DependentScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    surname: 'surname',
    schoolName: 'schoolName',
    dateOfBirth: 'dateOfBirth',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DependentScalarFieldEnum = (typeof DependentScalarFieldEnum)[keyof typeof DependentScalarFieldEnum]


  export const UserDependentScalarFieldEnum: {
    userId: 'userId',
    dependentId: 'dependentId',
    relationship: 'relationship'
  };

  export type UserDependentScalarFieldEnum = (typeof UserDependentScalarFieldEnum)[keyof typeof UserDependentScalarFieldEnum]


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
   * Reference to a field of type 'RegistrationStep'
   */
  export type EnumRegistrationStepFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStep'>
    


  /**
   * Reference to a field of type 'RegistrationStep[]'
   */
  export type ListEnumRegistrationStepFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStep[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RelationshipType'
   */
  export type EnumRelationshipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationshipType'>
    


  /**
   * Reference to a field of type 'RelationshipType[]'
   */
  export type ListEnumRelationshipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationshipType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    registrationStep?: EnumRegistrationStepFilter<"User"> | $Enums.RegistrationStep
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    dependents?: UserDependentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    registrationStep?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dependents?: UserDependentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    registrationStep?: EnumRegistrationStepFilter<"User"> | $Enums.RegistrationStep
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    dependents?: UserDependentListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    registrationStep?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    surname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    registrationStep?: EnumRegistrationStepWithAggregatesFilter<"User"> | $Enums.RegistrationStep
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DependentWhereInput = {
    AND?: DependentWhereInput | DependentWhereInput[]
    OR?: DependentWhereInput[]
    NOT?: DependentWhereInput | DependentWhereInput[]
    id?: IntFilter<"Dependent"> | number
    firstName?: StringFilter<"Dependent"> | string
    surname?: StringFilter<"Dependent"> | string
    schoolName?: StringFilter<"Dependent"> | string
    dateOfBirth?: DateTimeFilter<"Dependent"> | Date | string
    createdAt?: DateTimeFilter<"Dependent"> | Date | string
    updatedAt?: DateTimeFilter<"Dependent"> | Date | string
    users?: UserDependentListRelationFilter
  }

  export type DependentOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    surname?: SortOrder
    schoolName?: SortOrder
    dateOfBirth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserDependentOrderByRelationAggregateInput
  }

  export type DependentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DependentWhereInput | DependentWhereInput[]
    OR?: DependentWhereInput[]
    NOT?: DependentWhereInput | DependentWhereInput[]
    firstName?: StringFilter<"Dependent"> | string
    surname?: StringFilter<"Dependent"> | string
    schoolName?: StringFilter<"Dependent"> | string
    dateOfBirth?: DateTimeFilter<"Dependent"> | Date | string
    createdAt?: DateTimeFilter<"Dependent"> | Date | string
    updatedAt?: DateTimeFilter<"Dependent"> | Date | string
    users?: UserDependentListRelationFilter
  }, "id">

  export type DependentOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    surname?: SortOrder
    schoolName?: SortOrder
    dateOfBirth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DependentCountOrderByAggregateInput
    _avg?: DependentAvgOrderByAggregateInput
    _max?: DependentMaxOrderByAggregateInput
    _min?: DependentMinOrderByAggregateInput
    _sum?: DependentSumOrderByAggregateInput
  }

  export type DependentScalarWhereWithAggregatesInput = {
    AND?: DependentScalarWhereWithAggregatesInput | DependentScalarWhereWithAggregatesInput[]
    OR?: DependentScalarWhereWithAggregatesInput[]
    NOT?: DependentScalarWhereWithAggregatesInput | DependentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dependent"> | number
    firstName?: StringWithAggregatesFilter<"Dependent"> | string
    surname?: StringWithAggregatesFilter<"Dependent"> | string
    schoolName?: StringWithAggregatesFilter<"Dependent"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"Dependent"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Dependent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dependent"> | Date | string
  }

  export type UserDependentWhereInput = {
    AND?: UserDependentWhereInput | UserDependentWhereInput[]
    OR?: UserDependentWhereInput[]
    NOT?: UserDependentWhereInput | UserDependentWhereInput[]
    userId?: IntFilter<"UserDependent"> | number
    dependentId?: IntFilter<"UserDependent"> | number
    relationship?: EnumRelationshipTypeFilter<"UserDependent"> | $Enums.RelationshipType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dependent?: XOR<DependentScalarRelationFilter, DependentWhereInput>
  }

  export type UserDependentOrderByWithRelationInput = {
    userId?: SortOrder
    dependentId?: SortOrder
    relationship?: SortOrder
    user?: UserOrderByWithRelationInput
    dependent?: DependentOrderByWithRelationInput
  }

  export type UserDependentWhereUniqueInput = Prisma.AtLeast<{
    userId_dependentId?: UserDependentUserIdDependentIdCompoundUniqueInput
    AND?: UserDependentWhereInput | UserDependentWhereInput[]
    OR?: UserDependentWhereInput[]
    NOT?: UserDependentWhereInput | UserDependentWhereInput[]
    userId?: IntFilter<"UserDependent"> | number
    dependentId?: IntFilter<"UserDependent"> | number
    relationship?: EnumRelationshipTypeFilter<"UserDependent"> | $Enums.RelationshipType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dependent?: XOR<DependentScalarRelationFilter, DependentWhereInput>
  }, "userId_dependentId">

  export type UserDependentOrderByWithAggregationInput = {
    userId?: SortOrder
    dependentId?: SortOrder
    relationship?: SortOrder
    _count?: UserDependentCountOrderByAggregateInput
    _avg?: UserDependentAvgOrderByAggregateInput
    _max?: UserDependentMaxOrderByAggregateInput
    _min?: UserDependentMinOrderByAggregateInput
    _sum?: UserDependentSumOrderByAggregateInput
  }

  export type UserDependentScalarWhereWithAggregatesInput = {
    AND?: UserDependentScalarWhereWithAggregatesInput | UserDependentScalarWhereWithAggregatesInput[]
    OR?: UserDependentScalarWhereWithAggregatesInput[]
    NOT?: UserDependentScalarWhereWithAggregatesInput | UserDependentScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserDependent"> | number
    dependentId?: IntWithAggregatesFilter<"UserDependent"> | number
    relationship?: EnumRelationshipTypeWithAggregatesFilter<"UserDependent"> | $Enums.RelationshipType
  }

  export type UserCreateInput = {
    firstName: string
    surname: string
    email: string
    password: string
    phoneNumber: string
    registrationStep?: $Enums.RegistrationStep
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    dependents?: UserDependentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    surname: string
    email: string
    password: string
    phoneNumber: string
    registrationStep?: $Enums.RegistrationStep
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    dependents?: UserDependentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    registrationStep?: EnumRegistrationStepFieldUpdateOperationsInput | $Enums.RegistrationStep
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependents?: UserDependentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    registrationStep?: EnumRegistrationStepFieldUpdateOperationsInput | $Enums.RegistrationStep
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependents?: UserDependentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    surname: string
    email: string
    password: string
    phoneNumber: string
    registrationStep?: $Enums.RegistrationStep
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    registrationStep?: EnumRegistrationStepFieldUpdateOperationsInput | $Enums.RegistrationStep
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    registrationStep?: EnumRegistrationStepFieldUpdateOperationsInput | $Enums.RegistrationStep
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependentCreateInput = {
    firstName: string
    surname: string
    schoolName: string
    dateOfBirth: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserDependentCreateNestedManyWithoutDependentInput
  }

  export type DependentUncheckedCreateInput = {
    id?: number
    firstName: string
    surname: string
    schoolName: string
    dateOfBirth: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserDependentUncheckedCreateNestedManyWithoutDependentInput
  }

  export type DependentUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserDependentUpdateManyWithoutDependentNestedInput
  }

  export type DependentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserDependentUncheckedUpdateManyWithoutDependentNestedInput
  }

  export type DependentCreateManyInput = {
    id?: number
    firstName: string
    surname: string
    schoolName: string
    dateOfBirth: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DependentUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDependentCreateInput = {
    relationship: $Enums.RelationshipType
    user: UserCreateNestedOneWithoutDependentsInput
    dependent: DependentCreateNestedOneWithoutUsersInput
  }

  export type UserDependentUncheckedCreateInput = {
    userId: number
    dependentId: number
    relationship: $Enums.RelationshipType
  }

  export type UserDependentUpdateInput = {
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    user?: UserUpdateOneRequiredWithoutDependentsNestedInput
    dependent?: DependentUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserDependentUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    dependentId?: IntFieldUpdateOperationsInput | number
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type UserDependentCreateManyInput = {
    userId: number
    dependentId: number
    relationship: $Enums.RelationshipType
  }

  export type UserDependentUpdateManyMutationInput = {
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type UserDependentUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    dependentId?: IntFieldUpdateOperationsInput | number
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
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

  export type EnumRegistrationStepFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStep | EnumRegistrationStepFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStep[] | ListEnumRegistrationStepFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStep[] | ListEnumRegistrationStepFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStepFilter<$PrismaModel> | $Enums.RegistrationStep
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type UserDependentListRelationFilter = {
    every?: UserDependentWhereInput
    some?: UserDependentWhereInput
    none?: UserDependentWhereInput
  }

  export type UserDependentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    registrationStep?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    registrationStep?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    registrationStep?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRegistrationStepWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStep | EnumRegistrationStepFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStep[] | ListEnumRegistrationStepFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStep[] | ListEnumRegistrationStepFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStepWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStep
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStepFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStepFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type DependentCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    surname?: SortOrder
    schoolName?: SortOrder
    dateOfBirth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DependentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DependentMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    surname?: SortOrder
    schoolName?: SortOrder
    dateOfBirth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DependentMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    surname?: SortOrder
    schoolName?: SortOrder
    dateOfBirth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DependentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRelationshipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeFilter<$PrismaModel> | $Enums.RelationshipType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DependentScalarRelationFilter = {
    is?: DependentWhereInput
    isNot?: DependentWhereInput
  }

  export type UserDependentUserIdDependentIdCompoundUniqueInput = {
    userId: number
    dependentId: number
  }

  export type UserDependentCountOrderByAggregateInput = {
    userId?: SortOrder
    dependentId?: SortOrder
    relationship?: SortOrder
  }

  export type UserDependentAvgOrderByAggregateInput = {
    userId?: SortOrder
    dependentId?: SortOrder
  }

  export type UserDependentMaxOrderByAggregateInput = {
    userId?: SortOrder
    dependentId?: SortOrder
    relationship?: SortOrder
  }

  export type UserDependentMinOrderByAggregateInput = {
    userId?: SortOrder
    dependentId?: SortOrder
    relationship?: SortOrder
  }

  export type UserDependentSumOrderByAggregateInput = {
    userId?: SortOrder
    dependentId?: SortOrder
  }

  export type EnumRelationshipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationshipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationshipTypeFilter<$PrismaModel>
  }

  export type UserDependentCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDependentCreateWithoutUserInput, UserDependentUncheckedCreateWithoutUserInput> | UserDependentCreateWithoutUserInput[] | UserDependentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDependentCreateOrConnectWithoutUserInput | UserDependentCreateOrConnectWithoutUserInput[]
    createMany?: UserDependentCreateManyUserInputEnvelope
    connect?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
  }

  export type UserDependentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDependentCreateWithoutUserInput, UserDependentUncheckedCreateWithoutUserInput> | UserDependentCreateWithoutUserInput[] | UserDependentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDependentCreateOrConnectWithoutUserInput | UserDependentCreateOrConnectWithoutUserInput[]
    createMany?: UserDependentCreateManyUserInputEnvelope
    connect?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRegistrationStepFieldUpdateOperationsInput = {
    set?: $Enums.RegistrationStep
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserDependentUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDependentCreateWithoutUserInput, UserDependentUncheckedCreateWithoutUserInput> | UserDependentCreateWithoutUserInput[] | UserDependentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDependentCreateOrConnectWithoutUserInput | UserDependentCreateOrConnectWithoutUserInput[]
    upsert?: UserDependentUpsertWithWhereUniqueWithoutUserInput | UserDependentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDependentCreateManyUserInputEnvelope
    set?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    disconnect?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    delete?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    connect?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    update?: UserDependentUpdateWithWhereUniqueWithoutUserInput | UserDependentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDependentUpdateManyWithWhereWithoutUserInput | UserDependentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDependentScalarWhereInput | UserDependentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserDependentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDependentCreateWithoutUserInput, UserDependentUncheckedCreateWithoutUserInput> | UserDependentCreateWithoutUserInput[] | UserDependentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDependentCreateOrConnectWithoutUserInput | UserDependentCreateOrConnectWithoutUserInput[]
    upsert?: UserDependentUpsertWithWhereUniqueWithoutUserInput | UserDependentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDependentCreateManyUserInputEnvelope
    set?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    disconnect?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    delete?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    connect?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    update?: UserDependentUpdateWithWhereUniqueWithoutUserInput | UserDependentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDependentUpdateManyWithWhereWithoutUserInput | UserDependentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDependentScalarWhereInput | UserDependentScalarWhereInput[]
  }

  export type UserDependentCreateNestedManyWithoutDependentInput = {
    create?: XOR<UserDependentCreateWithoutDependentInput, UserDependentUncheckedCreateWithoutDependentInput> | UserDependentCreateWithoutDependentInput[] | UserDependentUncheckedCreateWithoutDependentInput[]
    connectOrCreate?: UserDependentCreateOrConnectWithoutDependentInput | UserDependentCreateOrConnectWithoutDependentInput[]
    createMany?: UserDependentCreateManyDependentInputEnvelope
    connect?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
  }

  export type UserDependentUncheckedCreateNestedManyWithoutDependentInput = {
    create?: XOR<UserDependentCreateWithoutDependentInput, UserDependentUncheckedCreateWithoutDependentInput> | UserDependentCreateWithoutDependentInput[] | UserDependentUncheckedCreateWithoutDependentInput[]
    connectOrCreate?: UserDependentCreateOrConnectWithoutDependentInput | UserDependentCreateOrConnectWithoutDependentInput[]
    createMany?: UserDependentCreateManyDependentInputEnvelope
    connect?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
  }

  export type UserDependentUpdateManyWithoutDependentNestedInput = {
    create?: XOR<UserDependentCreateWithoutDependentInput, UserDependentUncheckedCreateWithoutDependentInput> | UserDependentCreateWithoutDependentInput[] | UserDependentUncheckedCreateWithoutDependentInput[]
    connectOrCreate?: UserDependentCreateOrConnectWithoutDependentInput | UserDependentCreateOrConnectWithoutDependentInput[]
    upsert?: UserDependentUpsertWithWhereUniqueWithoutDependentInput | UserDependentUpsertWithWhereUniqueWithoutDependentInput[]
    createMany?: UserDependentCreateManyDependentInputEnvelope
    set?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    disconnect?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    delete?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    connect?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    update?: UserDependentUpdateWithWhereUniqueWithoutDependentInput | UserDependentUpdateWithWhereUniqueWithoutDependentInput[]
    updateMany?: UserDependentUpdateManyWithWhereWithoutDependentInput | UserDependentUpdateManyWithWhereWithoutDependentInput[]
    deleteMany?: UserDependentScalarWhereInput | UserDependentScalarWhereInput[]
  }

  export type UserDependentUncheckedUpdateManyWithoutDependentNestedInput = {
    create?: XOR<UserDependentCreateWithoutDependentInput, UserDependentUncheckedCreateWithoutDependentInput> | UserDependentCreateWithoutDependentInput[] | UserDependentUncheckedCreateWithoutDependentInput[]
    connectOrCreate?: UserDependentCreateOrConnectWithoutDependentInput | UserDependentCreateOrConnectWithoutDependentInput[]
    upsert?: UserDependentUpsertWithWhereUniqueWithoutDependentInput | UserDependentUpsertWithWhereUniqueWithoutDependentInput[]
    createMany?: UserDependentCreateManyDependentInputEnvelope
    set?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    disconnect?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    delete?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    connect?: UserDependentWhereUniqueInput | UserDependentWhereUniqueInput[]
    update?: UserDependentUpdateWithWhereUniqueWithoutDependentInput | UserDependentUpdateWithWhereUniqueWithoutDependentInput[]
    updateMany?: UserDependentUpdateManyWithWhereWithoutDependentInput | UserDependentUpdateManyWithWhereWithoutDependentInput[]
    deleteMany?: UserDependentScalarWhereInput | UserDependentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDependentsInput = {
    create?: XOR<UserCreateWithoutDependentsInput, UserUncheckedCreateWithoutDependentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDependentsInput
    connect?: UserWhereUniqueInput
  }

  export type DependentCreateNestedOneWithoutUsersInput = {
    create?: XOR<DependentCreateWithoutUsersInput, DependentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DependentCreateOrConnectWithoutUsersInput
    connect?: DependentWhereUniqueInput
  }

  export type EnumRelationshipTypeFieldUpdateOperationsInput = {
    set?: $Enums.RelationshipType
  }

  export type UserUpdateOneRequiredWithoutDependentsNestedInput = {
    create?: XOR<UserCreateWithoutDependentsInput, UserUncheckedCreateWithoutDependentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDependentsInput
    upsert?: UserUpsertWithoutDependentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDependentsInput, UserUpdateWithoutDependentsInput>, UserUncheckedUpdateWithoutDependentsInput>
  }

  export type DependentUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<DependentCreateWithoutUsersInput, DependentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DependentCreateOrConnectWithoutUsersInput
    upsert?: DependentUpsertWithoutUsersInput
    connect?: DependentWhereUniqueInput
    update?: XOR<XOR<DependentUpdateToOneWithWhereWithoutUsersInput, DependentUpdateWithoutUsersInput>, DependentUncheckedUpdateWithoutUsersInput>
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

  export type NestedEnumRegistrationStepFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStep | EnumRegistrationStepFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStep[] | ListEnumRegistrationStepFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStep[] | ListEnumRegistrationStepFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStepFilter<$PrismaModel> | $Enums.RegistrationStep
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumRegistrationStepWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStep | EnumRegistrationStepFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStep[] | ListEnumRegistrationStepFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStep[] | ListEnumRegistrationStepFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStepWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStep
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStepFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStepFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumRelationshipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeFilter<$PrismaModel> | $Enums.RelationshipType
  }

  export type NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationshipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationshipTypeFilter<$PrismaModel>
  }

  export type UserDependentCreateWithoutUserInput = {
    relationship: $Enums.RelationshipType
    dependent: DependentCreateNestedOneWithoutUsersInput
  }

  export type UserDependentUncheckedCreateWithoutUserInput = {
    dependentId: number
    relationship: $Enums.RelationshipType
  }

  export type UserDependentCreateOrConnectWithoutUserInput = {
    where: UserDependentWhereUniqueInput
    create: XOR<UserDependentCreateWithoutUserInput, UserDependentUncheckedCreateWithoutUserInput>
  }

  export type UserDependentCreateManyUserInputEnvelope = {
    data: UserDependentCreateManyUserInput | UserDependentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserDependentUpsertWithWhereUniqueWithoutUserInput = {
    where: UserDependentWhereUniqueInput
    update: XOR<UserDependentUpdateWithoutUserInput, UserDependentUncheckedUpdateWithoutUserInput>
    create: XOR<UserDependentCreateWithoutUserInput, UserDependentUncheckedCreateWithoutUserInput>
  }

  export type UserDependentUpdateWithWhereUniqueWithoutUserInput = {
    where: UserDependentWhereUniqueInput
    data: XOR<UserDependentUpdateWithoutUserInput, UserDependentUncheckedUpdateWithoutUserInput>
  }

  export type UserDependentUpdateManyWithWhereWithoutUserInput = {
    where: UserDependentScalarWhereInput
    data: XOR<UserDependentUpdateManyMutationInput, UserDependentUncheckedUpdateManyWithoutUserInput>
  }

  export type UserDependentScalarWhereInput = {
    AND?: UserDependentScalarWhereInput | UserDependentScalarWhereInput[]
    OR?: UserDependentScalarWhereInput[]
    NOT?: UserDependentScalarWhereInput | UserDependentScalarWhereInput[]
    userId?: IntFilter<"UserDependent"> | number
    dependentId?: IntFilter<"UserDependent"> | number
    relationship?: EnumRelationshipTypeFilter<"UserDependent"> | $Enums.RelationshipType
  }

  export type UserDependentCreateWithoutDependentInput = {
    relationship: $Enums.RelationshipType
    user: UserCreateNestedOneWithoutDependentsInput
  }

  export type UserDependentUncheckedCreateWithoutDependentInput = {
    userId: number
    relationship: $Enums.RelationshipType
  }

  export type UserDependentCreateOrConnectWithoutDependentInput = {
    where: UserDependentWhereUniqueInput
    create: XOR<UserDependentCreateWithoutDependentInput, UserDependentUncheckedCreateWithoutDependentInput>
  }

  export type UserDependentCreateManyDependentInputEnvelope = {
    data: UserDependentCreateManyDependentInput | UserDependentCreateManyDependentInput[]
    skipDuplicates?: boolean
  }

  export type UserDependentUpsertWithWhereUniqueWithoutDependentInput = {
    where: UserDependentWhereUniqueInput
    update: XOR<UserDependentUpdateWithoutDependentInput, UserDependentUncheckedUpdateWithoutDependentInput>
    create: XOR<UserDependentCreateWithoutDependentInput, UserDependentUncheckedCreateWithoutDependentInput>
  }

  export type UserDependentUpdateWithWhereUniqueWithoutDependentInput = {
    where: UserDependentWhereUniqueInput
    data: XOR<UserDependentUpdateWithoutDependentInput, UserDependentUncheckedUpdateWithoutDependentInput>
  }

  export type UserDependentUpdateManyWithWhereWithoutDependentInput = {
    where: UserDependentScalarWhereInput
    data: XOR<UserDependentUpdateManyMutationInput, UserDependentUncheckedUpdateManyWithoutDependentInput>
  }

  export type UserCreateWithoutDependentsInput = {
    firstName: string
    surname: string
    email: string
    password: string
    phoneNumber: string
    registrationStep?: $Enums.RegistrationStep
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutDependentsInput = {
    id?: number
    firstName: string
    surname: string
    email: string
    password: string
    phoneNumber: string
    registrationStep?: $Enums.RegistrationStep
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutDependentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDependentsInput, UserUncheckedCreateWithoutDependentsInput>
  }

  export type DependentCreateWithoutUsersInput = {
    firstName: string
    surname: string
    schoolName: string
    dateOfBirth: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DependentUncheckedCreateWithoutUsersInput = {
    id?: number
    firstName: string
    surname: string
    schoolName: string
    dateOfBirth: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DependentCreateOrConnectWithoutUsersInput = {
    where: DependentWhereUniqueInput
    create: XOR<DependentCreateWithoutUsersInput, DependentUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutDependentsInput = {
    update: XOR<UserUpdateWithoutDependentsInput, UserUncheckedUpdateWithoutDependentsInput>
    create: XOR<UserCreateWithoutDependentsInput, UserUncheckedCreateWithoutDependentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDependentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDependentsInput, UserUncheckedUpdateWithoutDependentsInput>
  }

  export type UserUpdateWithoutDependentsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    registrationStep?: EnumRegistrationStepFieldUpdateOperationsInput | $Enums.RegistrationStep
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutDependentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    registrationStep?: EnumRegistrationStepFieldUpdateOperationsInput | $Enums.RegistrationStep
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependentUpsertWithoutUsersInput = {
    update: XOR<DependentUpdateWithoutUsersInput, DependentUncheckedUpdateWithoutUsersInput>
    create: XOR<DependentCreateWithoutUsersInput, DependentUncheckedCreateWithoutUsersInput>
    where?: DependentWhereInput
  }

  export type DependentUpdateToOneWithWhereWithoutUsersInput = {
    where?: DependentWhereInput
    data: XOR<DependentUpdateWithoutUsersInput, DependentUncheckedUpdateWithoutUsersInput>
  }

  export type DependentUpdateWithoutUsersInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DependentUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDependentCreateManyUserInput = {
    dependentId: number
    relationship: $Enums.RelationshipType
  }

  export type UserDependentUpdateWithoutUserInput = {
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    dependent?: DependentUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserDependentUncheckedUpdateWithoutUserInput = {
    dependentId?: IntFieldUpdateOperationsInput | number
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type UserDependentUncheckedUpdateManyWithoutUserInput = {
    dependentId?: IntFieldUpdateOperationsInput | number
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type UserDependentCreateManyDependentInput = {
    userId: number
    relationship: $Enums.RelationshipType
  }

  export type UserDependentUpdateWithoutDependentInput = {
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    user?: UserUpdateOneRequiredWithoutDependentsNestedInput
  }

  export type UserDependentUncheckedUpdateWithoutDependentInput = {
    userId?: IntFieldUpdateOperationsInput | number
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type UserDependentUncheckedUpdateManyWithoutDependentInput = {
    userId?: IntFieldUpdateOperationsInput | number
    relationship?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
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