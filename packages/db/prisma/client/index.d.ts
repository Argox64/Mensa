
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
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model PlanningEntry
 * 
 */
export type PlanningEntry = $Result.DefaultSelection<Prisma.$PlanningEntryPayload>
/**
 * Model Pantry
 * 
 */
export type Pantry = $Result.DefaultSelection<Prisma.$PantryPayload>
/**
 * Model Plans
 * 
 */
export type Plans = $Result.DefaultSelection<Prisma.$PlansPayload>
/**
 * Model Subscriptions
 * 
 */
export type Subscriptions = $Result.DefaultSelection<Prisma.$SubscriptionsPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>
/**
 * Model ShoppingAffiliation
 * 
 */
export type ShoppingAffiliation = $Result.DefaultSelection<Prisma.$ShoppingAffiliationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Recipes
 * const recipes = await prisma.recipe.findMany()
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
   * // Fetch zero or more Recipes
   * const recipes = await prisma.recipe.findMany()
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
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planningEntry`: Exposes CRUD operations for the **PlanningEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanningEntries
    * const planningEntries = await prisma.planningEntry.findMany()
    * ```
    */
  get planningEntry(): Prisma.PlanningEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pantry`: Exposes CRUD operations for the **Pantry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pantries
    * const pantries = await prisma.pantry.findMany()
    * ```
    */
  get pantry(): Prisma.PantryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plans`: Exposes CRUD operations for the **Plans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plans.findMany()
    * ```
    */
  get plans(): Prisma.PlansDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptions`: Exposes CRUD operations for the **Subscriptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscriptions.findMany()
    * ```
    */
  get subscriptions(): Prisma.SubscriptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shoppingAffiliation`: Exposes CRUD operations for the **ShoppingAffiliation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingAffiliations
    * const shoppingAffiliations = await prisma.shoppingAffiliation.findMany()
    * ```
    */
  get shoppingAffiliation(): Prisma.ShoppingAffiliationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Recipe: 'Recipe',
    PlanningEntry: 'PlanningEntry',
    Pantry: 'Pantry',
    Plans: 'Plans',
    Subscriptions: 'Subscriptions',
    Payments: 'Payments',
    ShoppingAffiliation: 'ShoppingAffiliation'
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
      modelProps: "recipe" | "planningEntry" | "pantry" | "plans" | "subscriptions" | "payments" | "shoppingAffiliation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      PlanningEntry: {
        payload: Prisma.$PlanningEntryPayload<ExtArgs>
        fields: Prisma.PlanningEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanningEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanningEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningEntryPayload>
          }
          findFirst: {
            args: Prisma.PlanningEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanningEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningEntryPayload>
          }
          findMany: {
            args: Prisma.PlanningEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningEntryPayload>[]
          }
          create: {
            args: Prisma.PlanningEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningEntryPayload>
          }
          createMany: {
            args: Prisma.PlanningEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanningEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningEntryPayload>[]
          }
          delete: {
            args: Prisma.PlanningEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningEntryPayload>
          }
          update: {
            args: Prisma.PlanningEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningEntryPayload>
          }
          deleteMany: {
            args: Prisma.PlanningEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanningEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanningEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningEntryPayload>[]
          }
          upsert: {
            args: Prisma.PlanningEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanningEntryPayload>
          }
          aggregate: {
            args: Prisma.PlanningEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanningEntry>
          }
          groupBy: {
            args: Prisma.PlanningEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanningEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanningEntryCountArgs<ExtArgs>
            result: $Utils.Optional<PlanningEntryCountAggregateOutputType> | number
          }
        }
      }
      Pantry: {
        payload: Prisma.$PantryPayload<ExtArgs>
        fields: Prisma.PantryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PantryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PantryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>
          }
          findFirst: {
            args: Prisma.PantryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PantryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>
          }
          findMany: {
            args: Prisma.PantryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>[]
          }
          create: {
            args: Prisma.PantryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>
          }
          createMany: {
            args: Prisma.PantryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PantryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>[]
          }
          delete: {
            args: Prisma.PantryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>
          }
          update: {
            args: Prisma.PantryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>
          }
          deleteMany: {
            args: Prisma.PantryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PantryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PantryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>[]
          }
          upsert: {
            args: Prisma.PantryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>
          }
          aggregate: {
            args: Prisma.PantryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePantry>
          }
          groupBy: {
            args: Prisma.PantryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PantryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PantryCountArgs<ExtArgs>
            result: $Utils.Optional<PantryCountAggregateOutputType> | number
          }
        }
      }
      Plans: {
        payload: Prisma.$PlansPayload<ExtArgs>
        fields: Prisma.PlansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          findFirst: {
            args: Prisma.PlansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          findMany: {
            args: Prisma.PlansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>[]
          }
          create: {
            args: Prisma.PlansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          createMany: {
            args: Prisma.PlansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlansCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>[]
          }
          delete: {
            args: Prisma.PlansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          update: {
            args: Prisma.PlansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          deleteMany: {
            args: Prisma.PlansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlansUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>[]
          }
          upsert: {
            args: Prisma.PlansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          aggregate: {
            args: Prisma.PlansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlans>
          }
          groupBy: {
            args: Prisma.PlansGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlansGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlansCountArgs<ExtArgs>
            result: $Utils.Optional<PlansCountAggregateOutputType> | number
          }
        }
      }
      Subscriptions: {
        payload: Prisma.$SubscriptionsPayload<ExtArgs>
        fields: Prisma.SubscriptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          findMany: {
            args: Prisma.SubscriptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>[]
          }
          create: {
            args: Prisma.SubscriptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          createMany: {
            args: Prisma.SubscriptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          update: {
            args: Prisma.SubscriptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionsPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptions>
          }
          groupBy: {
            args: Prisma.SubscriptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionsCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionsCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      ShoppingAffiliation: {
        payload: Prisma.$ShoppingAffiliationPayload<ExtArgs>
        fields: Prisma.ShoppingAffiliationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShoppingAffiliationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingAffiliationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShoppingAffiliationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingAffiliationPayload>
          }
          findFirst: {
            args: Prisma.ShoppingAffiliationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingAffiliationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShoppingAffiliationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingAffiliationPayload>
          }
          findMany: {
            args: Prisma.ShoppingAffiliationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingAffiliationPayload>[]
          }
          create: {
            args: Prisma.ShoppingAffiliationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingAffiliationPayload>
          }
          createMany: {
            args: Prisma.ShoppingAffiliationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShoppingAffiliationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingAffiliationPayload>[]
          }
          delete: {
            args: Prisma.ShoppingAffiliationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingAffiliationPayload>
          }
          update: {
            args: Prisma.ShoppingAffiliationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingAffiliationPayload>
          }
          deleteMany: {
            args: Prisma.ShoppingAffiliationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShoppingAffiliationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShoppingAffiliationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingAffiliationPayload>[]
          }
          upsert: {
            args: Prisma.ShoppingAffiliationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingAffiliationPayload>
          }
          aggregate: {
            args: Prisma.ShoppingAffiliationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShoppingAffiliation>
          }
          groupBy: {
            args: Prisma.ShoppingAffiliationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShoppingAffiliationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShoppingAffiliationCountArgs<ExtArgs>
            result: $Utils.Optional<ShoppingAffiliationCountAggregateOutputType> | number
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
    recipe?: RecipeOmit
    planningEntry?: PlanningEntryOmit
    pantry?: PantryOmit
    plans?: PlansOmit
    subscriptions?: SubscriptionsOmit
    payments?: PaymentsOmit
    shoppingAffiliation?: ShoppingAffiliationOmit
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
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    PlanningEntries: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PlanningEntries?: boolean | RecipeCountOutputTypeCountPlanningEntriesArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountPlanningEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanningEntryWhereInput
  }


  /**
   * Count Type PlansCountOutputType
   */

  export type PlansCountOutputType = {
    Subscriptions: number
  }

  export type PlansCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscriptions?: boolean | PlansCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * PlansCountOutputType without action
   */
  export type PlansCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlansCountOutputType
     */
    select?: PlansCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlansCountOutputType without action
   */
  export type PlansCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionsWhereInput
  }


  /**
   * Count Type SubscriptionsCountOutputType
   */

  export type SubscriptionsCountOutputType = {
    Payments: number
  }

  export type SubscriptionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payments?: boolean | SubscriptionsCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionsCountOutputType without action
   */
  export type SubscriptionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionsCountOutputType
     */
    select?: SubscriptionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionsCountOutputType without action
   */
  export type SubscriptionsCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    totalCookingTime: number | null
  }

  export type RecipeSumAggregateOutputType = {
    totalCookingTime: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: string | null
    name: string | null
    creatorId: string | null
    totalCookingTime: number | null
    createdAt: Date | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    creatorId: string | null
    totalCookingTime: number | null
    createdAt: Date | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    name: number
    creatorId: number
    content: number
    tags: number
    totalCookingTime: number
    createdAt: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    totalCookingTime?: true
  }

  export type RecipeSumAggregateInputType = {
    totalCookingTime?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    name?: true
    creatorId?: true
    totalCookingTime?: true
    createdAt?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    name?: true
    creatorId?: true
    totalCookingTime?: true
    createdAt?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    name?: true
    creatorId?: true
    content?: true
    tags?: true
    totalCookingTime?: true
    createdAt?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: string
    name: string
    creatorId: string | null
    content: JsonValue | null
    tags: string[]
    totalCookingTime: number | null
    createdAt: Date
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creatorId?: boolean
    content?: boolean
    tags?: boolean
    totalCookingTime?: boolean
    createdAt?: boolean
    PlanningEntries?: boolean | Recipe$PlanningEntriesArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creatorId?: boolean
    content?: boolean
    tags?: boolean
    totalCookingTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creatorId?: boolean
    content?: boolean
    tags?: boolean
    totalCookingTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    name?: boolean
    creatorId?: boolean
    content?: boolean
    tags?: boolean
    totalCookingTime?: boolean
    createdAt?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "creatorId" | "content" | "tags" | "totalCookingTime" | "createdAt", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PlanningEntries?: boolean | Recipe$PlanningEntriesArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      PlanningEntries: Prisma.$PlanningEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      creatorId: string | null
      content: Prisma.JsonValue | null
      tags: string[]
      totalCookingTime: number | null
      createdAt: Date
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
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
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PlanningEntries<T extends Recipe$PlanningEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$PlanningEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanningEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Recipe model
   */
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'String'>
    readonly name: FieldRef<"Recipe", 'String'>
    readonly creatorId: FieldRef<"Recipe", 'String'>
    readonly content: FieldRef<"Recipe", 'Json'>
    readonly tags: FieldRef<"Recipe", 'String[]'>
    readonly totalCookingTime: FieldRef<"Recipe", 'Int'>
    readonly createdAt: FieldRef<"Recipe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe updateManyAndReturn
   */
  export type RecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe.PlanningEntries
   */
  export type Recipe$PlanningEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningEntry
     */
    select?: PlanningEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningEntry
     */
    omit?: PlanningEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningEntryInclude<ExtArgs> | null
    where?: PlanningEntryWhereInput
    orderBy?: PlanningEntryOrderByWithRelationInput | PlanningEntryOrderByWithRelationInput[]
    cursor?: PlanningEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanningEntryScalarFieldEnum | PlanningEntryScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model PlanningEntry
   */

  export type AggregatePlanningEntry = {
    _count: PlanningEntryCountAggregateOutputType | null
    _avg: PlanningEntryAvgAggregateOutputType | null
    _sum: PlanningEntrySumAggregateOutputType | null
    _min: PlanningEntryMinAggregateOutputType | null
    _max: PlanningEntryMaxAggregateOutputType | null
  }

  export type PlanningEntryAvgAggregateOutputType = {
    id: number | null
    nbPortions: number | null
  }

  export type PlanningEntrySumAggregateOutputType = {
    id: number | null
    nbPortions: number | null
  }

  export type PlanningEntryMinAggregateOutputType = {
    id: number | null
    userId: string | null
    recipeId: string | null
    nbPortions: number | null
  }

  export type PlanningEntryMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    recipeId: string | null
    nbPortions: number | null
  }

  export type PlanningEntryCountAggregateOutputType = {
    id: number
    userId: number
    recipeId: number
    nbPortions: number
    _all: number
  }


  export type PlanningEntryAvgAggregateInputType = {
    id?: true
    nbPortions?: true
  }

  export type PlanningEntrySumAggregateInputType = {
    id?: true
    nbPortions?: true
  }

  export type PlanningEntryMinAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    nbPortions?: true
  }

  export type PlanningEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    nbPortions?: true
  }

  export type PlanningEntryCountAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    nbPortions?: true
    _all?: true
  }

  export type PlanningEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanningEntry to aggregate.
     */
    where?: PlanningEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanningEntries to fetch.
     */
    orderBy?: PlanningEntryOrderByWithRelationInput | PlanningEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanningEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanningEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanningEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanningEntries
    **/
    _count?: true | PlanningEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanningEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanningEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanningEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanningEntryMaxAggregateInputType
  }

  export type GetPlanningEntryAggregateType<T extends PlanningEntryAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanningEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanningEntry[P]>
      : GetScalarType<T[P], AggregatePlanningEntry[P]>
  }




  export type PlanningEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanningEntryWhereInput
    orderBy?: PlanningEntryOrderByWithAggregationInput | PlanningEntryOrderByWithAggregationInput[]
    by: PlanningEntryScalarFieldEnum[] | PlanningEntryScalarFieldEnum
    having?: PlanningEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanningEntryCountAggregateInputType | true
    _avg?: PlanningEntryAvgAggregateInputType
    _sum?: PlanningEntrySumAggregateInputType
    _min?: PlanningEntryMinAggregateInputType
    _max?: PlanningEntryMaxAggregateInputType
  }

  export type PlanningEntryGroupByOutputType = {
    id: number
    userId: string
    recipeId: string
    nbPortions: number
    _count: PlanningEntryCountAggregateOutputType | null
    _avg: PlanningEntryAvgAggregateOutputType | null
    _sum: PlanningEntrySumAggregateOutputType | null
    _min: PlanningEntryMinAggregateOutputType | null
    _max: PlanningEntryMaxAggregateOutputType | null
  }

  type GetPlanningEntryGroupByPayload<T extends PlanningEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanningEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanningEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanningEntryGroupByOutputType[P]>
            : GetScalarType<T[P], PlanningEntryGroupByOutputType[P]>
        }
      >
    >


  export type PlanningEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    nbPortions?: boolean
    Recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planningEntry"]>

  export type PlanningEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    nbPortions?: boolean
    Recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planningEntry"]>

  export type PlanningEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    nbPortions?: boolean
    Recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planningEntry"]>

  export type PlanningEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    nbPortions?: boolean
  }

  export type PlanningEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "recipeId" | "nbPortions", ExtArgs["result"]["planningEntry"]>
  export type PlanningEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type PlanningEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type PlanningEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $PlanningEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanningEntry"
    objects: {
      Recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      recipeId: string
      nbPortions: number
    }, ExtArgs["result"]["planningEntry"]>
    composites: {}
  }

  type PlanningEntryGetPayload<S extends boolean | null | undefined | PlanningEntryDefaultArgs> = $Result.GetResult<Prisma.$PlanningEntryPayload, S>

  type PlanningEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanningEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanningEntryCountAggregateInputType | true
    }

  export interface PlanningEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanningEntry'], meta: { name: 'PlanningEntry' } }
    /**
     * Find zero or one PlanningEntry that matches the filter.
     * @param {PlanningEntryFindUniqueArgs} args - Arguments to find a PlanningEntry
     * @example
     * // Get one PlanningEntry
     * const planningEntry = await prisma.planningEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanningEntryFindUniqueArgs>(args: SelectSubset<T, PlanningEntryFindUniqueArgs<ExtArgs>>): Prisma__PlanningEntryClient<$Result.GetResult<Prisma.$PlanningEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanningEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanningEntryFindUniqueOrThrowArgs} args - Arguments to find a PlanningEntry
     * @example
     * // Get one PlanningEntry
     * const planningEntry = await prisma.planningEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanningEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanningEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanningEntryClient<$Result.GetResult<Prisma.$PlanningEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanningEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningEntryFindFirstArgs} args - Arguments to find a PlanningEntry
     * @example
     * // Get one PlanningEntry
     * const planningEntry = await prisma.planningEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanningEntryFindFirstArgs>(args?: SelectSubset<T, PlanningEntryFindFirstArgs<ExtArgs>>): Prisma__PlanningEntryClient<$Result.GetResult<Prisma.$PlanningEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanningEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningEntryFindFirstOrThrowArgs} args - Arguments to find a PlanningEntry
     * @example
     * // Get one PlanningEntry
     * const planningEntry = await prisma.planningEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanningEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanningEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanningEntryClient<$Result.GetResult<Prisma.$PlanningEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanningEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanningEntries
     * const planningEntries = await prisma.planningEntry.findMany()
     * 
     * // Get first 10 PlanningEntries
     * const planningEntries = await prisma.planningEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planningEntryWithIdOnly = await prisma.planningEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanningEntryFindManyArgs>(args?: SelectSubset<T, PlanningEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanningEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanningEntry.
     * @param {PlanningEntryCreateArgs} args - Arguments to create a PlanningEntry.
     * @example
     * // Create one PlanningEntry
     * const PlanningEntry = await prisma.planningEntry.create({
     *   data: {
     *     // ... data to create a PlanningEntry
     *   }
     * })
     * 
     */
    create<T extends PlanningEntryCreateArgs>(args: SelectSubset<T, PlanningEntryCreateArgs<ExtArgs>>): Prisma__PlanningEntryClient<$Result.GetResult<Prisma.$PlanningEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanningEntries.
     * @param {PlanningEntryCreateManyArgs} args - Arguments to create many PlanningEntries.
     * @example
     * // Create many PlanningEntries
     * const planningEntry = await prisma.planningEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanningEntryCreateManyArgs>(args?: SelectSubset<T, PlanningEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanningEntries and returns the data saved in the database.
     * @param {PlanningEntryCreateManyAndReturnArgs} args - Arguments to create many PlanningEntries.
     * @example
     * // Create many PlanningEntries
     * const planningEntry = await prisma.planningEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanningEntries and only return the `id`
     * const planningEntryWithIdOnly = await prisma.planningEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanningEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanningEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanningEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanningEntry.
     * @param {PlanningEntryDeleteArgs} args - Arguments to delete one PlanningEntry.
     * @example
     * // Delete one PlanningEntry
     * const PlanningEntry = await prisma.planningEntry.delete({
     *   where: {
     *     // ... filter to delete one PlanningEntry
     *   }
     * })
     * 
     */
    delete<T extends PlanningEntryDeleteArgs>(args: SelectSubset<T, PlanningEntryDeleteArgs<ExtArgs>>): Prisma__PlanningEntryClient<$Result.GetResult<Prisma.$PlanningEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanningEntry.
     * @param {PlanningEntryUpdateArgs} args - Arguments to update one PlanningEntry.
     * @example
     * // Update one PlanningEntry
     * const planningEntry = await prisma.planningEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanningEntryUpdateArgs>(args: SelectSubset<T, PlanningEntryUpdateArgs<ExtArgs>>): Prisma__PlanningEntryClient<$Result.GetResult<Prisma.$PlanningEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanningEntries.
     * @param {PlanningEntryDeleteManyArgs} args - Arguments to filter PlanningEntries to delete.
     * @example
     * // Delete a few PlanningEntries
     * const { count } = await prisma.planningEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanningEntryDeleteManyArgs>(args?: SelectSubset<T, PlanningEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanningEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanningEntries
     * const planningEntry = await prisma.planningEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanningEntryUpdateManyArgs>(args: SelectSubset<T, PlanningEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanningEntries and returns the data updated in the database.
     * @param {PlanningEntryUpdateManyAndReturnArgs} args - Arguments to update many PlanningEntries.
     * @example
     * // Update many PlanningEntries
     * const planningEntry = await prisma.planningEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanningEntries and only return the `id`
     * const planningEntryWithIdOnly = await prisma.planningEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlanningEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanningEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanningEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanningEntry.
     * @param {PlanningEntryUpsertArgs} args - Arguments to update or create a PlanningEntry.
     * @example
     * // Update or create a PlanningEntry
     * const planningEntry = await prisma.planningEntry.upsert({
     *   create: {
     *     // ... data to create a PlanningEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanningEntry we want to update
     *   }
     * })
     */
    upsert<T extends PlanningEntryUpsertArgs>(args: SelectSubset<T, PlanningEntryUpsertArgs<ExtArgs>>): Prisma__PlanningEntryClient<$Result.GetResult<Prisma.$PlanningEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanningEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningEntryCountArgs} args - Arguments to filter PlanningEntries to count.
     * @example
     * // Count the number of PlanningEntries
     * const count = await prisma.planningEntry.count({
     *   where: {
     *     // ... the filter for the PlanningEntries we want to count
     *   }
     * })
    **/
    count<T extends PlanningEntryCountArgs>(
      args?: Subset<T, PlanningEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanningEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanningEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanningEntryAggregateArgs>(args: Subset<T, PlanningEntryAggregateArgs>): Prisma.PrismaPromise<GetPlanningEntryAggregateType<T>>

    /**
     * Group by PlanningEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanningEntryGroupByArgs} args - Group by arguments.
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
      T extends PlanningEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanningEntryGroupByArgs['orderBy'] }
        : { orderBy?: PlanningEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanningEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanningEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanningEntry model
   */
  readonly fields: PlanningEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanningEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanningEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlanningEntry model
   */
  interface PlanningEntryFieldRefs {
    readonly id: FieldRef<"PlanningEntry", 'Int'>
    readonly userId: FieldRef<"PlanningEntry", 'String'>
    readonly recipeId: FieldRef<"PlanningEntry", 'String'>
    readonly nbPortions: FieldRef<"PlanningEntry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlanningEntry findUnique
   */
  export type PlanningEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningEntry
     */
    select?: PlanningEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningEntry
     */
    omit?: PlanningEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningEntryInclude<ExtArgs> | null
    /**
     * Filter, which PlanningEntry to fetch.
     */
    where: PlanningEntryWhereUniqueInput
  }

  /**
   * PlanningEntry findUniqueOrThrow
   */
  export type PlanningEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningEntry
     */
    select?: PlanningEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningEntry
     */
    omit?: PlanningEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningEntryInclude<ExtArgs> | null
    /**
     * Filter, which PlanningEntry to fetch.
     */
    where: PlanningEntryWhereUniqueInput
  }

  /**
   * PlanningEntry findFirst
   */
  export type PlanningEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningEntry
     */
    select?: PlanningEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningEntry
     */
    omit?: PlanningEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningEntryInclude<ExtArgs> | null
    /**
     * Filter, which PlanningEntry to fetch.
     */
    where?: PlanningEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanningEntries to fetch.
     */
    orderBy?: PlanningEntryOrderByWithRelationInput | PlanningEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanningEntries.
     */
    cursor?: PlanningEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanningEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanningEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanningEntries.
     */
    distinct?: PlanningEntryScalarFieldEnum | PlanningEntryScalarFieldEnum[]
  }

  /**
   * PlanningEntry findFirstOrThrow
   */
  export type PlanningEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningEntry
     */
    select?: PlanningEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningEntry
     */
    omit?: PlanningEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningEntryInclude<ExtArgs> | null
    /**
     * Filter, which PlanningEntry to fetch.
     */
    where?: PlanningEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanningEntries to fetch.
     */
    orderBy?: PlanningEntryOrderByWithRelationInput | PlanningEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanningEntries.
     */
    cursor?: PlanningEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanningEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanningEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanningEntries.
     */
    distinct?: PlanningEntryScalarFieldEnum | PlanningEntryScalarFieldEnum[]
  }

  /**
   * PlanningEntry findMany
   */
  export type PlanningEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningEntry
     */
    select?: PlanningEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningEntry
     */
    omit?: PlanningEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningEntryInclude<ExtArgs> | null
    /**
     * Filter, which PlanningEntries to fetch.
     */
    where?: PlanningEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanningEntries to fetch.
     */
    orderBy?: PlanningEntryOrderByWithRelationInput | PlanningEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanningEntries.
     */
    cursor?: PlanningEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanningEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanningEntries.
     */
    skip?: number
    distinct?: PlanningEntryScalarFieldEnum | PlanningEntryScalarFieldEnum[]
  }

  /**
   * PlanningEntry create
   */
  export type PlanningEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningEntry
     */
    select?: PlanningEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningEntry
     */
    omit?: PlanningEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanningEntry.
     */
    data: XOR<PlanningEntryCreateInput, PlanningEntryUncheckedCreateInput>
  }

  /**
   * PlanningEntry createMany
   */
  export type PlanningEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanningEntries.
     */
    data: PlanningEntryCreateManyInput | PlanningEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanningEntry createManyAndReturn
   */
  export type PlanningEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningEntry
     */
    select?: PlanningEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningEntry
     */
    omit?: PlanningEntryOmit<ExtArgs> | null
    /**
     * The data used to create many PlanningEntries.
     */
    data: PlanningEntryCreateManyInput | PlanningEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanningEntry update
   */
  export type PlanningEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningEntry
     */
    select?: PlanningEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningEntry
     */
    omit?: PlanningEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanningEntry.
     */
    data: XOR<PlanningEntryUpdateInput, PlanningEntryUncheckedUpdateInput>
    /**
     * Choose, which PlanningEntry to update.
     */
    where: PlanningEntryWhereUniqueInput
  }

  /**
   * PlanningEntry updateMany
   */
  export type PlanningEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanningEntries.
     */
    data: XOR<PlanningEntryUpdateManyMutationInput, PlanningEntryUncheckedUpdateManyInput>
    /**
     * Filter which PlanningEntries to update
     */
    where?: PlanningEntryWhereInput
    /**
     * Limit how many PlanningEntries to update.
     */
    limit?: number
  }

  /**
   * PlanningEntry updateManyAndReturn
   */
  export type PlanningEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningEntry
     */
    select?: PlanningEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningEntry
     */
    omit?: PlanningEntryOmit<ExtArgs> | null
    /**
     * The data used to update PlanningEntries.
     */
    data: XOR<PlanningEntryUpdateManyMutationInput, PlanningEntryUncheckedUpdateManyInput>
    /**
     * Filter which PlanningEntries to update
     */
    where?: PlanningEntryWhereInput
    /**
     * Limit how many PlanningEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanningEntry upsert
   */
  export type PlanningEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningEntry
     */
    select?: PlanningEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningEntry
     */
    omit?: PlanningEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanningEntry to update in case it exists.
     */
    where: PlanningEntryWhereUniqueInput
    /**
     * In case the PlanningEntry found by the `where` argument doesn't exist, create a new PlanningEntry with this data.
     */
    create: XOR<PlanningEntryCreateInput, PlanningEntryUncheckedCreateInput>
    /**
     * In case the PlanningEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanningEntryUpdateInput, PlanningEntryUncheckedUpdateInput>
  }

  /**
   * PlanningEntry delete
   */
  export type PlanningEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningEntry
     */
    select?: PlanningEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningEntry
     */
    omit?: PlanningEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningEntryInclude<ExtArgs> | null
    /**
     * Filter which PlanningEntry to delete.
     */
    where: PlanningEntryWhereUniqueInput
  }

  /**
   * PlanningEntry deleteMany
   */
  export type PlanningEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanningEntries to delete
     */
    where?: PlanningEntryWhereInput
    /**
     * Limit how many PlanningEntries to delete.
     */
    limit?: number
  }

  /**
   * PlanningEntry without action
   */
  export type PlanningEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanningEntry
     */
    select?: PlanningEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanningEntry
     */
    omit?: PlanningEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanningEntryInclude<ExtArgs> | null
  }


  /**
   * Model Pantry
   */

  export type AggregatePantry = {
    _count: PantryCountAggregateOutputType | null
    _avg: PantryAvgAggregateOutputType | null
    _sum: PantrySumAggregateOutputType | null
    _min: PantryMinAggregateOutputType | null
    _max: PantryMaxAggregateOutputType | null
  }

  export type PantryAvgAggregateOutputType = {
    id: number | null
  }

  export type PantrySumAggregateOutputType = {
    id: number | null
  }

  export type PantryMinAggregateOutputType = {
    id: number | null
    userId: string | null
  }

  export type PantryMaxAggregateOutputType = {
    id: number | null
    userId: string | null
  }

  export type PantryCountAggregateOutputType = {
    id: number
    userId: number
    content: number
    _all: number
  }


  export type PantryAvgAggregateInputType = {
    id?: true
  }

  export type PantrySumAggregateInputType = {
    id?: true
  }

  export type PantryMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PantryMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PantryCountAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    _all?: true
  }

  export type PantryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pantry to aggregate.
     */
    where?: PantryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pantries to fetch.
     */
    orderBy?: PantryOrderByWithRelationInput | PantryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PantryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pantries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pantries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pantries
    **/
    _count?: true | PantryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PantryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PantrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PantryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PantryMaxAggregateInputType
  }

  export type GetPantryAggregateType<T extends PantryAggregateArgs> = {
        [P in keyof T & keyof AggregatePantry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePantry[P]>
      : GetScalarType<T[P], AggregatePantry[P]>
  }




  export type PantryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PantryWhereInput
    orderBy?: PantryOrderByWithAggregationInput | PantryOrderByWithAggregationInput[]
    by: PantryScalarFieldEnum[] | PantryScalarFieldEnum
    having?: PantryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PantryCountAggregateInputType | true
    _avg?: PantryAvgAggregateInputType
    _sum?: PantrySumAggregateInputType
    _min?: PantryMinAggregateInputType
    _max?: PantryMaxAggregateInputType
  }

  export type PantryGroupByOutputType = {
    id: number
    userId: string
    content: JsonValue | null
    _count: PantryCountAggregateOutputType | null
    _avg: PantryAvgAggregateOutputType | null
    _sum: PantrySumAggregateOutputType | null
    _min: PantryMinAggregateOutputType | null
    _max: PantryMaxAggregateOutputType | null
  }

  type GetPantryGroupByPayload<T extends PantryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PantryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PantryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PantryGroupByOutputType[P]>
            : GetScalarType<T[P], PantryGroupByOutputType[P]>
        }
      >
    >


  export type PantrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
  }, ExtArgs["result"]["pantry"]>

  export type PantrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
  }, ExtArgs["result"]["pantry"]>

  export type PantrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
  }, ExtArgs["result"]["pantry"]>

  export type PantrySelectScalar = {
    id?: boolean
    userId?: boolean
    content?: boolean
  }

  export type PantryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "content", ExtArgs["result"]["pantry"]>

  export type $PantryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pantry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      content: Prisma.JsonValue | null
    }, ExtArgs["result"]["pantry"]>
    composites: {}
  }

  type PantryGetPayload<S extends boolean | null | undefined | PantryDefaultArgs> = $Result.GetResult<Prisma.$PantryPayload, S>

  type PantryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PantryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PantryCountAggregateInputType | true
    }

  export interface PantryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pantry'], meta: { name: 'Pantry' } }
    /**
     * Find zero or one Pantry that matches the filter.
     * @param {PantryFindUniqueArgs} args - Arguments to find a Pantry
     * @example
     * // Get one Pantry
     * const pantry = await prisma.pantry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PantryFindUniqueArgs>(args: SelectSubset<T, PantryFindUniqueArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pantry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PantryFindUniqueOrThrowArgs} args - Arguments to find a Pantry
     * @example
     * // Get one Pantry
     * const pantry = await prisma.pantry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PantryFindUniqueOrThrowArgs>(args: SelectSubset<T, PantryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pantry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryFindFirstArgs} args - Arguments to find a Pantry
     * @example
     * // Get one Pantry
     * const pantry = await prisma.pantry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PantryFindFirstArgs>(args?: SelectSubset<T, PantryFindFirstArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pantry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryFindFirstOrThrowArgs} args - Arguments to find a Pantry
     * @example
     * // Get one Pantry
     * const pantry = await prisma.pantry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PantryFindFirstOrThrowArgs>(args?: SelectSubset<T, PantryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pantries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pantries
     * const pantries = await prisma.pantry.findMany()
     * 
     * // Get first 10 Pantries
     * const pantries = await prisma.pantry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pantryWithIdOnly = await prisma.pantry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PantryFindManyArgs>(args?: SelectSubset<T, PantryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pantry.
     * @param {PantryCreateArgs} args - Arguments to create a Pantry.
     * @example
     * // Create one Pantry
     * const Pantry = await prisma.pantry.create({
     *   data: {
     *     // ... data to create a Pantry
     *   }
     * })
     * 
     */
    create<T extends PantryCreateArgs>(args: SelectSubset<T, PantryCreateArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pantries.
     * @param {PantryCreateManyArgs} args - Arguments to create many Pantries.
     * @example
     * // Create many Pantries
     * const pantry = await prisma.pantry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PantryCreateManyArgs>(args?: SelectSubset<T, PantryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pantries and returns the data saved in the database.
     * @param {PantryCreateManyAndReturnArgs} args - Arguments to create many Pantries.
     * @example
     * // Create many Pantries
     * const pantry = await prisma.pantry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pantries and only return the `id`
     * const pantryWithIdOnly = await prisma.pantry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PantryCreateManyAndReturnArgs>(args?: SelectSubset<T, PantryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pantry.
     * @param {PantryDeleteArgs} args - Arguments to delete one Pantry.
     * @example
     * // Delete one Pantry
     * const Pantry = await prisma.pantry.delete({
     *   where: {
     *     // ... filter to delete one Pantry
     *   }
     * })
     * 
     */
    delete<T extends PantryDeleteArgs>(args: SelectSubset<T, PantryDeleteArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pantry.
     * @param {PantryUpdateArgs} args - Arguments to update one Pantry.
     * @example
     * // Update one Pantry
     * const pantry = await prisma.pantry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PantryUpdateArgs>(args: SelectSubset<T, PantryUpdateArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pantries.
     * @param {PantryDeleteManyArgs} args - Arguments to filter Pantries to delete.
     * @example
     * // Delete a few Pantries
     * const { count } = await prisma.pantry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PantryDeleteManyArgs>(args?: SelectSubset<T, PantryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pantries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pantries
     * const pantry = await prisma.pantry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PantryUpdateManyArgs>(args: SelectSubset<T, PantryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pantries and returns the data updated in the database.
     * @param {PantryUpdateManyAndReturnArgs} args - Arguments to update many Pantries.
     * @example
     * // Update many Pantries
     * const pantry = await prisma.pantry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pantries and only return the `id`
     * const pantryWithIdOnly = await prisma.pantry.updateManyAndReturn({
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
    updateManyAndReturn<T extends PantryUpdateManyAndReturnArgs>(args: SelectSubset<T, PantryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pantry.
     * @param {PantryUpsertArgs} args - Arguments to update or create a Pantry.
     * @example
     * // Update or create a Pantry
     * const pantry = await prisma.pantry.upsert({
     *   create: {
     *     // ... data to create a Pantry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pantry we want to update
     *   }
     * })
     */
    upsert<T extends PantryUpsertArgs>(args: SelectSubset<T, PantryUpsertArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pantries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryCountArgs} args - Arguments to filter Pantries to count.
     * @example
     * // Count the number of Pantries
     * const count = await prisma.pantry.count({
     *   where: {
     *     // ... the filter for the Pantries we want to count
     *   }
     * })
    **/
    count<T extends PantryCountArgs>(
      args?: Subset<T, PantryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PantryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pantry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PantryAggregateArgs>(args: Subset<T, PantryAggregateArgs>): Prisma.PrismaPromise<GetPantryAggregateType<T>>

    /**
     * Group by Pantry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryGroupByArgs} args - Group by arguments.
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
      T extends PantryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PantryGroupByArgs['orderBy'] }
        : { orderBy?: PantryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PantryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPantryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pantry model
   */
  readonly fields: PantryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pantry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PantryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Pantry model
   */
  interface PantryFieldRefs {
    readonly id: FieldRef<"Pantry", 'Int'>
    readonly userId: FieldRef<"Pantry", 'String'>
    readonly content: FieldRef<"Pantry", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Pantry findUnique
   */
  export type PantryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Filter, which Pantry to fetch.
     */
    where: PantryWhereUniqueInput
  }

  /**
   * Pantry findUniqueOrThrow
   */
  export type PantryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Filter, which Pantry to fetch.
     */
    where: PantryWhereUniqueInput
  }

  /**
   * Pantry findFirst
   */
  export type PantryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Filter, which Pantry to fetch.
     */
    where?: PantryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pantries to fetch.
     */
    orderBy?: PantryOrderByWithRelationInput | PantryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pantries.
     */
    cursor?: PantryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pantries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pantries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pantries.
     */
    distinct?: PantryScalarFieldEnum | PantryScalarFieldEnum[]
  }

  /**
   * Pantry findFirstOrThrow
   */
  export type PantryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Filter, which Pantry to fetch.
     */
    where?: PantryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pantries to fetch.
     */
    orderBy?: PantryOrderByWithRelationInput | PantryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pantries.
     */
    cursor?: PantryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pantries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pantries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pantries.
     */
    distinct?: PantryScalarFieldEnum | PantryScalarFieldEnum[]
  }

  /**
   * Pantry findMany
   */
  export type PantryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Filter, which Pantries to fetch.
     */
    where?: PantryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pantries to fetch.
     */
    orderBy?: PantryOrderByWithRelationInput | PantryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pantries.
     */
    cursor?: PantryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pantries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pantries.
     */
    skip?: number
    distinct?: PantryScalarFieldEnum | PantryScalarFieldEnum[]
  }

  /**
   * Pantry create
   */
  export type PantryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * The data needed to create a Pantry.
     */
    data: XOR<PantryCreateInput, PantryUncheckedCreateInput>
  }

  /**
   * Pantry createMany
   */
  export type PantryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pantries.
     */
    data: PantryCreateManyInput | PantryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pantry createManyAndReturn
   */
  export type PantryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * The data used to create many Pantries.
     */
    data: PantryCreateManyInput | PantryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pantry update
   */
  export type PantryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * The data needed to update a Pantry.
     */
    data: XOR<PantryUpdateInput, PantryUncheckedUpdateInput>
    /**
     * Choose, which Pantry to update.
     */
    where: PantryWhereUniqueInput
  }

  /**
   * Pantry updateMany
   */
  export type PantryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pantries.
     */
    data: XOR<PantryUpdateManyMutationInput, PantryUncheckedUpdateManyInput>
    /**
     * Filter which Pantries to update
     */
    where?: PantryWhereInput
    /**
     * Limit how many Pantries to update.
     */
    limit?: number
  }

  /**
   * Pantry updateManyAndReturn
   */
  export type PantryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * The data used to update Pantries.
     */
    data: XOR<PantryUpdateManyMutationInput, PantryUncheckedUpdateManyInput>
    /**
     * Filter which Pantries to update
     */
    where?: PantryWhereInput
    /**
     * Limit how many Pantries to update.
     */
    limit?: number
  }

  /**
   * Pantry upsert
   */
  export type PantryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * The filter to search for the Pantry to update in case it exists.
     */
    where: PantryWhereUniqueInput
    /**
     * In case the Pantry found by the `where` argument doesn't exist, create a new Pantry with this data.
     */
    create: XOR<PantryCreateInput, PantryUncheckedCreateInput>
    /**
     * In case the Pantry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PantryUpdateInput, PantryUncheckedUpdateInput>
  }

  /**
   * Pantry delete
   */
  export type PantryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Filter which Pantry to delete.
     */
    where: PantryWhereUniqueInput
  }

  /**
   * Pantry deleteMany
   */
  export type PantryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pantries to delete
     */
    where?: PantryWhereInput
    /**
     * Limit how many Pantries to delete.
     */
    limit?: number
  }

  /**
   * Pantry without action
   */
  export type PantryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
  }


  /**
   * Model Plans
   */

  export type AggregatePlans = {
    _count: PlansCountAggregateOutputType | null
    _avg: PlansAvgAggregateOutputType | null
    _sum: PlansSumAggregateOutputType | null
    _min: PlansMinAggregateOutputType | null
    _max: PlansMaxAggregateOutputType | null
  }

  export type PlansAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PlansSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PlansMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    billingCycle: string | null
  }

  export type PlansMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    billingCycle: string | null
  }

  export type PlansCountAggregateOutputType = {
    id: number
    name: number
    price: number
    billingCycle: number
    _all: number
  }


  export type PlansAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type PlansSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type PlansMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    billingCycle?: true
  }

  export type PlansMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    billingCycle?: true
  }

  export type PlansCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    billingCycle?: true
    _all?: true
  }

  export type PlansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to aggregate.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlansMaxAggregateInputType
  }

  export type GetPlansAggregateType<T extends PlansAggregateArgs> = {
        [P in keyof T & keyof AggregatePlans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlans[P]>
      : GetScalarType<T[P], AggregatePlans[P]>
  }




  export type PlansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlansWhereInput
    orderBy?: PlansOrderByWithAggregationInput | PlansOrderByWithAggregationInput[]
    by: PlansScalarFieldEnum[] | PlansScalarFieldEnum
    having?: PlansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlansCountAggregateInputType | true
    _avg?: PlansAvgAggregateInputType
    _sum?: PlansSumAggregateInputType
    _min?: PlansMinAggregateInputType
    _max?: PlansMaxAggregateInputType
  }

  export type PlansGroupByOutputType = {
    id: number
    name: string
    price: number
    billingCycle: string
    _count: PlansCountAggregateOutputType | null
    _avg: PlansAvgAggregateOutputType | null
    _sum: PlansSumAggregateOutputType | null
    _min: PlansMinAggregateOutputType | null
    _max: PlansMaxAggregateOutputType | null
  }

  type GetPlansGroupByPayload<T extends PlansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlansGroupByOutputType[P]>
            : GetScalarType<T[P], PlansGroupByOutputType[P]>
        }
      >
    >


  export type PlansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    billingCycle?: boolean
    Subscriptions?: boolean | Plans$SubscriptionsArgs<ExtArgs>
    _count?: boolean | PlansCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plans"]>

  export type PlansSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    billingCycle?: boolean
  }, ExtArgs["result"]["plans"]>

  export type PlansSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    billingCycle?: boolean
  }, ExtArgs["result"]["plans"]>

  export type PlansSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    billingCycle?: boolean
  }

  export type PlansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "billingCycle", ExtArgs["result"]["plans"]>
  export type PlansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscriptions?: boolean | Plans$SubscriptionsArgs<ExtArgs>
    _count?: boolean | PlansCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlansIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlansIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plans"
    objects: {
      Subscriptions: Prisma.$SubscriptionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      billingCycle: string
    }, ExtArgs["result"]["plans"]>
    composites: {}
  }

  type PlansGetPayload<S extends boolean | null | undefined | PlansDefaultArgs> = $Result.GetResult<Prisma.$PlansPayload, S>

  type PlansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlansCountAggregateInputType | true
    }

  export interface PlansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plans'], meta: { name: 'Plans' } }
    /**
     * Find zero or one Plans that matches the filter.
     * @param {PlansFindUniqueArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlansFindUniqueArgs>(args: SelectSubset<T, PlansFindUniqueArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plans that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlansFindUniqueOrThrowArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlansFindUniqueOrThrowArgs>(args: SelectSubset<T, PlansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansFindFirstArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlansFindFirstArgs>(args?: SelectSubset<T, PlansFindFirstArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansFindFirstOrThrowArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlansFindFirstOrThrowArgs>(args?: SelectSubset<T, PlansFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plans.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plansWithIdOnly = await prisma.plans.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlansFindManyArgs>(args?: SelectSubset<T, PlansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plans.
     * @param {PlansCreateArgs} args - Arguments to create a Plans.
     * @example
     * // Create one Plans
     * const Plans = await prisma.plans.create({
     *   data: {
     *     // ... data to create a Plans
     *   }
     * })
     * 
     */
    create<T extends PlansCreateArgs>(args: SelectSubset<T, PlansCreateArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlansCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plans = await prisma.plans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlansCreateManyArgs>(args?: SelectSubset<T, PlansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlansCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plans = await prisma.plans.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const plansWithIdOnly = await prisma.plans.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlansCreateManyAndReturnArgs>(args?: SelectSubset<T, PlansCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plans.
     * @param {PlansDeleteArgs} args - Arguments to delete one Plans.
     * @example
     * // Delete one Plans
     * const Plans = await prisma.plans.delete({
     *   where: {
     *     // ... filter to delete one Plans
     *   }
     * })
     * 
     */
    delete<T extends PlansDeleteArgs>(args: SelectSubset<T, PlansDeleteArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plans.
     * @param {PlansUpdateArgs} args - Arguments to update one Plans.
     * @example
     * // Update one Plans
     * const plans = await prisma.plans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlansUpdateArgs>(args: SelectSubset<T, PlansUpdateArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlansDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlansDeleteManyArgs>(args?: SelectSubset<T, PlansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plans = await prisma.plans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlansUpdateManyArgs>(args: SelectSubset<T, PlansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlansUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plans = await prisma.plans.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const plansWithIdOnly = await prisma.plans.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlansUpdateManyAndReturnArgs>(args: SelectSubset<T, PlansUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plans.
     * @param {PlansUpsertArgs} args - Arguments to update or create a Plans.
     * @example
     * // Update or create a Plans
     * const plans = await prisma.plans.upsert({
     *   create: {
     *     // ... data to create a Plans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plans we want to update
     *   }
     * })
     */
    upsert<T extends PlansUpsertArgs>(args: SelectSubset<T, PlansUpsertArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plans.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlansCountArgs>(
      args?: Subset<T, PlansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlansAggregateArgs>(args: Subset<T, PlansAggregateArgs>): Prisma.PrismaPromise<GetPlansAggregateType<T>>

    /**
     * Group by Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansGroupByArgs} args - Group by arguments.
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
      T extends PlansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlansGroupByArgs['orderBy'] }
        : { orderBy?: PlansGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plans model
   */
  readonly fields: PlansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Subscriptions<T extends Plans$SubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Plans$SubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Plans model
   */
  interface PlansFieldRefs {
    readonly id: FieldRef<"Plans", 'Int'>
    readonly name: FieldRef<"Plans", 'String'>
    readonly price: FieldRef<"Plans", 'Float'>
    readonly billingCycle: FieldRef<"Plans", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Plans findUnique
   */
  export type PlansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans findUniqueOrThrow
   */
  export type PlansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans findFirst
   */
  export type PlansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * Plans findFirstOrThrow
   */
  export type PlansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * Plans findMany
   */
  export type PlansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * Plans create
   */
  export type PlansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * The data needed to create a Plans.
     */
    data: XOR<PlansCreateInput, PlansUncheckedCreateInput>
  }

  /**
   * Plans createMany
   */
  export type PlansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlansCreateManyInput | PlansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plans createManyAndReturn
   */
  export type PlansCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlansCreateManyInput | PlansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plans update
   */
  export type PlansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * The data needed to update a Plans.
     */
    data: XOR<PlansUpdateInput, PlansUncheckedUpdateInput>
    /**
     * Choose, which Plans to update.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans updateMany
   */
  export type PlansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlansUpdateManyMutationInput, PlansUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlansWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plans updateManyAndReturn
   */
  export type PlansUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlansUpdateManyMutationInput, PlansUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlansWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plans upsert
   */
  export type PlansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * The filter to search for the Plans to update in case it exists.
     */
    where: PlansWhereUniqueInput
    /**
     * In case the Plans found by the `where` argument doesn't exist, create a new Plans with this data.
     */
    create: XOR<PlansCreateInput, PlansUncheckedCreateInput>
    /**
     * In case the Plans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlansUpdateInput, PlansUncheckedUpdateInput>
  }

  /**
   * Plans delete
   */
  export type PlansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    /**
     * Filter which Plans to delete.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans deleteMany
   */
  export type PlansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlansWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plans.Subscriptions
   */
  export type Plans$SubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    where?: SubscriptionsWhereInput
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    cursor?: SubscriptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * Plans without action
   */
  export type PlansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
  }


  /**
   * Model Subscriptions
   */

  export type AggregateSubscriptions = {
    _count: SubscriptionsCountAggregateOutputType | null
    _avg: SubscriptionsAvgAggregateOutputType | null
    _sum: SubscriptionsSumAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  export type SubscriptionsAvgAggregateOutputType = {
    planId: number | null
    status: number | null
    remainingDays: number | null
  }

  export type SubscriptionsSumAggregateOutputType = {
    planId: number | null
    status: number | null
    remainingDays: number | null
  }

  export type SubscriptionsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: number | null
    status: number | null
    startDate: Date | null
    remainingDays: number | null
  }

  export type SubscriptionsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: number | null
    status: number | null
    startDate: Date | null
    remainingDays: number | null
  }

  export type SubscriptionsCountAggregateOutputType = {
    id: number
    userId: number
    planId: number
    status: number
    startDate: number
    remainingDays: number
    _all: number
  }


  export type SubscriptionsAvgAggregateInputType = {
    planId?: true
    status?: true
    remainingDays?: true
  }

  export type SubscriptionsSumAggregateInputType = {
    planId?: true
    status?: true
    remainingDays?: true
  }

  export type SubscriptionsMinAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    status?: true
    startDate?: true
    remainingDays?: true
  }

  export type SubscriptionsMaxAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    status?: true
    startDate?: true
    remainingDays?: true
  }

  export type SubscriptionsCountAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    status?: true
    startDate?: true
    remainingDays?: true
    _all?: true
  }

  export type SubscriptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to aggregate.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type GetSubscriptionsAggregateType<T extends SubscriptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptions[P]>
      : GetScalarType<T[P], AggregateSubscriptions[P]>
  }




  export type SubscriptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionsWhereInput
    orderBy?: SubscriptionsOrderByWithAggregationInput | SubscriptionsOrderByWithAggregationInput[]
    by: SubscriptionsScalarFieldEnum[] | SubscriptionsScalarFieldEnum
    having?: SubscriptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionsCountAggregateInputType | true
    _avg?: SubscriptionsAvgAggregateInputType
    _sum?: SubscriptionsSumAggregateInputType
    _min?: SubscriptionsMinAggregateInputType
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type SubscriptionsGroupByOutputType = {
    id: string
    userId: string
    planId: number | null
    status: number
    startDate: Date
    remainingDays: number | null
    _count: SubscriptionsCountAggregateOutputType | null
    _avg: SubscriptionsAvgAggregateOutputType | null
    _sum: SubscriptionsSumAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  type GetSubscriptionsGroupByPayload<T extends SubscriptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    status?: boolean
    startDate?: boolean
    remainingDays?: boolean
    Plan?: boolean | Subscriptions$PlanArgs<ExtArgs>
    Payments?: boolean | Subscriptions$PaymentsArgs<ExtArgs>
    _count?: boolean | SubscriptionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type SubscriptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    status?: boolean
    startDate?: boolean
    remainingDays?: boolean
    Plan?: boolean | Subscriptions$PlanArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type SubscriptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    status?: boolean
    startDate?: boolean
    remainingDays?: boolean
    Plan?: boolean | Subscriptions$PlanArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type SubscriptionsSelectScalar = {
    id?: boolean
    userId?: boolean
    planId?: boolean
    status?: boolean
    startDate?: boolean
    remainingDays?: boolean
  }

  export type SubscriptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planId" | "status" | "startDate" | "remainingDays", ExtArgs["result"]["subscriptions"]>
  export type SubscriptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Plan?: boolean | Subscriptions$PlanArgs<ExtArgs>
    Payments?: boolean | Subscriptions$PaymentsArgs<ExtArgs>
    _count?: boolean | SubscriptionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Plan?: boolean | Subscriptions$PlanArgs<ExtArgs>
  }
  export type SubscriptionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Plan?: boolean | Subscriptions$PlanArgs<ExtArgs>
  }

  export type $SubscriptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscriptions"
    objects: {
      Plan: Prisma.$PlansPayload<ExtArgs> | null
      Payments: Prisma.$PaymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      planId: number | null
      status: number
      startDate: Date
      remainingDays: number | null
    }, ExtArgs["result"]["subscriptions"]>
    composites: {}
  }

  type SubscriptionsGetPayload<S extends boolean | null | undefined | SubscriptionsDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionsPayload, S>

  type SubscriptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionsCountAggregateInputType | true
    }

  export interface SubscriptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscriptions'], meta: { name: 'Subscriptions' } }
    /**
     * Find zero or one Subscriptions that matches the filter.
     * @param {SubscriptionsFindUniqueArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionsFindUniqueArgs>(args: SelectSubset<T, SubscriptionsFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscriptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionsFindUniqueOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsFindFirstArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionsFindFirstArgs>(args?: SelectSubset<T, SubscriptionsFindFirstArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsFindFirstOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionsFindManyArgs>(args?: SelectSubset<T, SubscriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscriptions.
     * @param {SubscriptionsCreateArgs} args - Arguments to create a Subscriptions.
     * @example
     * // Create one Subscriptions
     * const Subscriptions = await prisma.subscriptions.create({
     *   data: {
     *     // ... data to create a Subscriptions
     *   }
     * })
     * 
     */
    create<T extends SubscriptionsCreateArgs>(args: SelectSubset<T, SubscriptionsCreateArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionsCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscriptions = await prisma.subscriptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionsCreateManyArgs>(args?: SelectSubset<T, SubscriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionsCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscriptions = await prisma.subscriptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscriptions.
     * @param {SubscriptionsDeleteArgs} args - Arguments to delete one Subscriptions.
     * @example
     * // Delete one Subscriptions
     * const Subscriptions = await prisma.subscriptions.delete({
     *   where: {
     *     // ... filter to delete one Subscriptions
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionsDeleteArgs>(args: SelectSubset<T, SubscriptionsDeleteArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscriptions.
     * @param {SubscriptionsUpdateArgs} args - Arguments to update one Subscriptions.
     * @example
     * // Update one Subscriptions
     * const subscriptions = await prisma.subscriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionsUpdateArgs>(args: SelectSubset<T, SubscriptionsUpdateArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionsDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionsDeleteManyArgs>(args?: SelectSubset<T, SubscriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscriptions = await prisma.subscriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionsUpdateManyArgs>(args: SelectSubset<T, SubscriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionsUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscriptions = await prisma.subscriptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscriptions.
     * @param {SubscriptionsUpsertArgs} args - Arguments to update or create a Subscriptions.
     * @example
     * // Update or create a Subscriptions
     * const subscriptions = await prisma.subscriptions.upsert({
     *   create: {
     *     // ... data to create a Subscriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriptions we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionsUpsertArgs>(args: SelectSubset<T, SubscriptionsUpsertArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscriptions.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionsCountArgs>(
      args?: Subset<T, SubscriptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionsAggregateArgs>(args: Subset<T, SubscriptionsAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionsAggregateType<T>>

    /**
     * Group by Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionsGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscriptions model
   */
  readonly fields: SubscriptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Plan<T extends Subscriptions$PlanArgs<ExtArgs> = {}>(args?: Subset<T, Subscriptions$PlanArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Payments<T extends Subscriptions$PaymentsArgs<ExtArgs> = {}>(args?: Subset<T, Subscriptions$PaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subscriptions model
   */
  interface SubscriptionsFieldRefs {
    readonly id: FieldRef<"Subscriptions", 'String'>
    readonly userId: FieldRef<"Subscriptions", 'String'>
    readonly planId: FieldRef<"Subscriptions", 'Int'>
    readonly status: FieldRef<"Subscriptions", 'Int'>
    readonly startDate: FieldRef<"Subscriptions", 'DateTime'>
    readonly remainingDays: FieldRef<"Subscriptions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Subscriptions findUnique
   */
  export type SubscriptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where: SubscriptionsWhereUniqueInput
  }

  /**
   * Subscriptions findUniqueOrThrow
   */
  export type SubscriptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where: SubscriptionsWhereUniqueInput
  }

  /**
   * Subscriptions findFirst
   */
  export type SubscriptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * Subscriptions findFirstOrThrow
   */
  export type SubscriptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * Subscriptions findMany
   */
  export type SubscriptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionsOrderByWithRelationInput | SubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * Subscriptions create
   */
  export type SubscriptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscriptions.
     */
    data: XOR<SubscriptionsCreateInput, SubscriptionsUncheckedCreateInput>
  }

  /**
   * Subscriptions createMany
   */
  export type SubscriptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionsCreateManyInput | SubscriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscriptions createManyAndReturn
   */
  export type SubscriptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionsCreateManyInput | SubscriptionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscriptions update
   */
  export type SubscriptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscriptions.
     */
    data: XOR<SubscriptionsUpdateInput, SubscriptionsUncheckedUpdateInput>
    /**
     * Choose, which Subscriptions to update.
     */
    where: SubscriptionsWhereUniqueInput
  }

  /**
   * Subscriptions updateMany
   */
  export type SubscriptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionsUpdateManyMutationInput, SubscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionsWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscriptions updateManyAndReturn
   */
  export type SubscriptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionsUpdateManyMutationInput, SubscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionsWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscriptions upsert
   */
  export type SubscriptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscriptions to update in case it exists.
     */
    where: SubscriptionsWhereUniqueInput
    /**
     * In case the Subscriptions found by the `where` argument doesn't exist, create a new Subscriptions with this data.
     */
    create: XOR<SubscriptionsCreateInput, SubscriptionsUncheckedCreateInput>
    /**
     * In case the Subscriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionsUpdateInput, SubscriptionsUncheckedUpdateInput>
  }

  /**
   * Subscriptions delete
   */
  export type SubscriptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
    /**
     * Filter which Subscriptions to delete.
     */
    where: SubscriptionsWhereUniqueInput
  }

  /**
   * Subscriptions deleteMany
   */
  export type SubscriptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionsWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscriptions.Plan
   */
  export type Subscriptions$PlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlansInclude<ExtArgs> | null
    where?: PlansWhereInput
  }

  /**
   * Subscriptions.Payments
   */
  export type Subscriptions$PaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    cursor?: PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Subscriptions without action
   */
  export type SubscriptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriptions
     */
    select?: SubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriptions
     */
    omit?: SubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionsInclude<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    userId: string | null
    subscriptionId: string | null
    amount: number | null
    paymentDate: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    subscriptionId: string | null
    amount: number | null
    paymentDate: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    userId: number
    subscriptionId: number
    amount: number
    paymentDate: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    amount?: true
    paymentDate?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    amount?: true
    paymentDate?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    amount?: true
    paymentDate?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    userId: string
    subscriptionId: string
    amount: number
    paymentDate: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    paymentDate?: boolean
    Subscription?: boolean | SubscriptionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    paymentDate?: boolean
    Subscription?: boolean | SubscriptionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    paymentDate?: boolean
    Subscription?: boolean | SubscriptionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectScalar = {
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    paymentDate?: boolean
  }

  export type PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "subscriptionId" | "amount" | "paymentDate", ExtArgs["result"]["payments"]>
  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscription?: boolean | SubscriptionsDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscription?: boolean | SubscriptionsDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscription?: boolean | SubscriptionsDefaultArgs<ExtArgs>
  }

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      Subscription: Prisma.$SubscriptionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      subscriptionId: string
      amount: number
      paymentDate: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentsFindManyArgs>(args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends PaymentsCreateArgs>(args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends PaymentsDeleteArgs>(args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsUpdateArgs>(args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
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
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Subscription<T extends SubscriptionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionsDefaultArgs<ExtArgs>>): Prisma__SubscriptionsClient<$Result.GetResult<Prisma.$SubscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payments model
   */
  interface PaymentsFieldRefs {
    readonly id: FieldRef<"Payments", 'Int'>
    readonly userId: FieldRef<"Payments", 'String'>
    readonly subscriptionId: FieldRef<"Payments", 'String'>
    readonly amount: FieldRef<"Payments", 'Float'>
    readonly paymentDate: FieldRef<"Payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payments createManyAndReturn
   */
  export type PaymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payments updateManyAndReturn
   */
  export type PaymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
  }


  /**
   * Model ShoppingAffiliation
   */

  export type AggregateShoppingAffiliation = {
    _count: ShoppingAffiliationCountAggregateOutputType | null
    _avg: ShoppingAffiliationAvgAggregateOutputType | null
    _sum: ShoppingAffiliationSumAggregateOutputType | null
    _min: ShoppingAffiliationMinAggregateOutputType | null
    _max: ShoppingAffiliationMaxAggregateOutputType | null
  }

  export type ShoppingAffiliationAvgAggregateOutputType = {
    amount: number | null
  }

  export type ShoppingAffiliationSumAggregateOutputType = {
    amount: number | null
  }

  export type ShoppingAffiliationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    trackingUrl: string | null
    amount: number | null
  }

  export type ShoppingAffiliationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    trackingUrl: string | null
    amount: number | null
  }

  export type ShoppingAffiliationCountAggregateOutputType = {
    id: number
    userId: number
    trackingUrl: number
    amount: number
    _all: number
  }


  export type ShoppingAffiliationAvgAggregateInputType = {
    amount?: true
  }

  export type ShoppingAffiliationSumAggregateInputType = {
    amount?: true
  }

  export type ShoppingAffiliationMinAggregateInputType = {
    id?: true
    userId?: true
    trackingUrl?: true
    amount?: true
  }

  export type ShoppingAffiliationMaxAggregateInputType = {
    id?: true
    userId?: true
    trackingUrl?: true
    amount?: true
  }

  export type ShoppingAffiliationCountAggregateInputType = {
    id?: true
    userId?: true
    trackingUrl?: true
    amount?: true
    _all?: true
  }

  export type ShoppingAffiliationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingAffiliation to aggregate.
     */
    where?: ShoppingAffiliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingAffiliations to fetch.
     */
    orderBy?: ShoppingAffiliationOrderByWithRelationInput | ShoppingAffiliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShoppingAffiliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingAffiliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingAffiliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingAffiliations
    **/
    _count?: true | ShoppingAffiliationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShoppingAffiliationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShoppingAffiliationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingAffiliationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingAffiliationMaxAggregateInputType
  }

  export type GetShoppingAffiliationAggregateType<T extends ShoppingAffiliationAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingAffiliation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingAffiliation[P]>
      : GetScalarType<T[P], AggregateShoppingAffiliation[P]>
  }




  export type ShoppingAffiliationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingAffiliationWhereInput
    orderBy?: ShoppingAffiliationOrderByWithAggregationInput | ShoppingAffiliationOrderByWithAggregationInput[]
    by: ShoppingAffiliationScalarFieldEnum[] | ShoppingAffiliationScalarFieldEnum
    having?: ShoppingAffiliationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingAffiliationCountAggregateInputType | true
    _avg?: ShoppingAffiliationAvgAggregateInputType
    _sum?: ShoppingAffiliationSumAggregateInputType
    _min?: ShoppingAffiliationMinAggregateInputType
    _max?: ShoppingAffiliationMaxAggregateInputType
  }

  export type ShoppingAffiliationGroupByOutputType = {
    id: string
    userId: string | null
    trackingUrl: string
    amount: number
    _count: ShoppingAffiliationCountAggregateOutputType | null
    _avg: ShoppingAffiliationAvgAggregateOutputType | null
    _sum: ShoppingAffiliationSumAggregateOutputType | null
    _min: ShoppingAffiliationMinAggregateOutputType | null
    _max: ShoppingAffiliationMaxAggregateOutputType | null
  }

  type GetShoppingAffiliationGroupByPayload<T extends ShoppingAffiliationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingAffiliationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingAffiliationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingAffiliationGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingAffiliationGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingAffiliationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackingUrl?: boolean
    amount?: boolean
  }, ExtArgs["result"]["shoppingAffiliation"]>

  export type ShoppingAffiliationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackingUrl?: boolean
    amount?: boolean
  }, ExtArgs["result"]["shoppingAffiliation"]>

  export type ShoppingAffiliationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackingUrl?: boolean
    amount?: boolean
  }, ExtArgs["result"]["shoppingAffiliation"]>

  export type ShoppingAffiliationSelectScalar = {
    id?: boolean
    userId?: boolean
    trackingUrl?: boolean
    amount?: boolean
  }

  export type ShoppingAffiliationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "trackingUrl" | "amount", ExtArgs["result"]["shoppingAffiliation"]>

  export type $ShoppingAffiliationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShoppingAffiliation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      trackingUrl: string
      amount: number
    }, ExtArgs["result"]["shoppingAffiliation"]>
    composites: {}
  }

  type ShoppingAffiliationGetPayload<S extends boolean | null | undefined | ShoppingAffiliationDefaultArgs> = $Result.GetResult<Prisma.$ShoppingAffiliationPayload, S>

  type ShoppingAffiliationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShoppingAffiliationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShoppingAffiliationCountAggregateInputType | true
    }

  export interface ShoppingAffiliationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShoppingAffiliation'], meta: { name: 'ShoppingAffiliation' } }
    /**
     * Find zero or one ShoppingAffiliation that matches the filter.
     * @param {ShoppingAffiliationFindUniqueArgs} args - Arguments to find a ShoppingAffiliation
     * @example
     * // Get one ShoppingAffiliation
     * const shoppingAffiliation = await prisma.shoppingAffiliation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShoppingAffiliationFindUniqueArgs>(args: SelectSubset<T, ShoppingAffiliationFindUniqueArgs<ExtArgs>>): Prisma__ShoppingAffiliationClient<$Result.GetResult<Prisma.$ShoppingAffiliationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShoppingAffiliation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShoppingAffiliationFindUniqueOrThrowArgs} args - Arguments to find a ShoppingAffiliation
     * @example
     * // Get one ShoppingAffiliation
     * const shoppingAffiliation = await prisma.shoppingAffiliation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShoppingAffiliationFindUniqueOrThrowArgs>(args: SelectSubset<T, ShoppingAffiliationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShoppingAffiliationClient<$Result.GetResult<Prisma.$ShoppingAffiliationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingAffiliation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingAffiliationFindFirstArgs} args - Arguments to find a ShoppingAffiliation
     * @example
     * // Get one ShoppingAffiliation
     * const shoppingAffiliation = await prisma.shoppingAffiliation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShoppingAffiliationFindFirstArgs>(args?: SelectSubset<T, ShoppingAffiliationFindFirstArgs<ExtArgs>>): Prisma__ShoppingAffiliationClient<$Result.GetResult<Prisma.$ShoppingAffiliationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingAffiliation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingAffiliationFindFirstOrThrowArgs} args - Arguments to find a ShoppingAffiliation
     * @example
     * // Get one ShoppingAffiliation
     * const shoppingAffiliation = await prisma.shoppingAffiliation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShoppingAffiliationFindFirstOrThrowArgs>(args?: SelectSubset<T, ShoppingAffiliationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShoppingAffiliationClient<$Result.GetResult<Prisma.$ShoppingAffiliationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShoppingAffiliations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingAffiliationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingAffiliations
     * const shoppingAffiliations = await prisma.shoppingAffiliation.findMany()
     * 
     * // Get first 10 ShoppingAffiliations
     * const shoppingAffiliations = await prisma.shoppingAffiliation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingAffiliationWithIdOnly = await prisma.shoppingAffiliation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShoppingAffiliationFindManyArgs>(args?: SelectSubset<T, ShoppingAffiliationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingAffiliationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShoppingAffiliation.
     * @param {ShoppingAffiliationCreateArgs} args - Arguments to create a ShoppingAffiliation.
     * @example
     * // Create one ShoppingAffiliation
     * const ShoppingAffiliation = await prisma.shoppingAffiliation.create({
     *   data: {
     *     // ... data to create a ShoppingAffiliation
     *   }
     * })
     * 
     */
    create<T extends ShoppingAffiliationCreateArgs>(args: SelectSubset<T, ShoppingAffiliationCreateArgs<ExtArgs>>): Prisma__ShoppingAffiliationClient<$Result.GetResult<Prisma.$ShoppingAffiliationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShoppingAffiliations.
     * @param {ShoppingAffiliationCreateManyArgs} args - Arguments to create many ShoppingAffiliations.
     * @example
     * // Create many ShoppingAffiliations
     * const shoppingAffiliation = await prisma.shoppingAffiliation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShoppingAffiliationCreateManyArgs>(args?: SelectSubset<T, ShoppingAffiliationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShoppingAffiliations and returns the data saved in the database.
     * @param {ShoppingAffiliationCreateManyAndReturnArgs} args - Arguments to create many ShoppingAffiliations.
     * @example
     * // Create many ShoppingAffiliations
     * const shoppingAffiliation = await prisma.shoppingAffiliation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShoppingAffiliations and only return the `id`
     * const shoppingAffiliationWithIdOnly = await prisma.shoppingAffiliation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShoppingAffiliationCreateManyAndReturnArgs>(args?: SelectSubset<T, ShoppingAffiliationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingAffiliationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShoppingAffiliation.
     * @param {ShoppingAffiliationDeleteArgs} args - Arguments to delete one ShoppingAffiliation.
     * @example
     * // Delete one ShoppingAffiliation
     * const ShoppingAffiliation = await prisma.shoppingAffiliation.delete({
     *   where: {
     *     // ... filter to delete one ShoppingAffiliation
     *   }
     * })
     * 
     */
    delete<T extends ShoppingAffiliationDeleteArgs>(args: SelectSubset<T, ShoppingAffiliationDeleteArgs<ExtArgs>>): Prisma__ShoppingAffiliationClient<$Result.GetResult<Prisma.$ShoppingAffiliationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShoppingAffiliation.
     * @param {ShoppingAffiliationUpdateArgs} args - Arguments to update one ShoppingAffiliation.
     * @example
     * // Update one ShoppingAffiliation
     * const shoppingAffiliation = await prisma.shoppingAffiliation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShoppingAffiliationUpdateArgs>(args: SelectSubset<T, ShoppingAffiliationUpdateArgs<ExtArgs>>): Prisma__ShoppingAffiliationClient<$Result.GetResult<Prisma.$ShoppingAffiliationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShoppingAffiliations.
     * @param {ShoppingAffiliationDeleteManyArgs} args - Arguments to filter ShoppingAffiliations to delete.
     * @example
     * // Delete a few ShoppingAffiliations
     * const { count } = await prisma.shoppingAffiliation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShoppingAffiliationDeleteManyArgs>(args?: SelectSubset<T, ShoppingAffiliationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingAffiliations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingAffiliationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingAffiliations
     * const shoppingAffiliation = await prisma.shoppingAffiliation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShoppingAffiliationUpdateManyArgs>(args: SelectSubset<T, ShoppingAffiliationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingAffiliations and returns the data updated in the database.
     * @param {ShoppingAffiliationUpdateManyAndReturnArgs} args - Arguments to update many ShoppingAffiliations.
     * @example
     * // Update many ShoppingAffiliations
     * const shoppingAffiliation = await prisma.shoppingAffiliation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShoppingAffiliations and only return the `id`
     * const shoppingAffiliationWithIdOnly = await prisma.shoppingAffiliation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShoppingAffiliationUpdateManyAndReturnArgs>(args: SelectSubset<T, ShoppingAffiliationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingAffiliationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShoppingAffiliation.
     * @param {ShoppingAffiliationUpsertArgs} args - Arguments to update or create a ShoppingAffiliation.
     * @example
     * // Update or create a ShoppingAffiliation
     * const shoppingAffiliation = await prisma.shoppingAffiliation.upsert({
     *   create: {
     *     // ... data to create a ShoppingAffiliation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingAffiliation we want to update
     *   }
     * })
     */
    upsert<T extends ShoppingAffiliationUpsertArgs>(args: SelectSubset<T, ShoppingAffiliationUpsertArgs<ExtArgs>>): Prisma__ShoppingAffiliationClient<$Result.GetResult<Prisma.$ShoppingAffiliationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShoppingAffiliations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingAffiliationCountArgs} args - Arguments to filter ShoppingAffiliations to count.
     * @example
     * // Count the number of ShoppingAffiliations
     * const count = await prisma.shoppingAffiliation.count({
     *   where: {
     *     // ... the filter for the ShoppingAffiliations we want to count
     *   }
     * })
    **/
    count<T extends ShoppingAffiliationCountArgs>(
      args?: Subset<T, ShoppingAffiliationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingAffiliationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingAffiliation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingAffiliationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShoppingAffiliationAggregateArgs>(args: Subset<T, ShoppingAffiliationAggregateArgs>): Prisma.PrismaPromise<GetShoppingAffiliationAggregateType<T>>

    /**
     * Group by ShoppingAffiliation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingAffiliationGroupByArgs} args - Group by arguments.
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
      T extends ShoppingAffiliationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingAffiliationGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingAffiliationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShoppingAffiliationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingAffiliationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShoppingAffiliation model
   */
  readonly fields: ShoppingAffiliationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingAffiliation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoppingAffiliationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ShoppingAffiliation model
   */
  interface ShoppingAffiliationFieldRefs {
    readonly id: FieldRef<"ShoppingAffiliation", 'String'>
    readonly userId: FieldRef<"ShoppingAffiliation", 'String'>
    readonly trackingUrl: FieldRef<"ShoppingAffiliation", 'String'>
    readonly amount: FieldRef<"ShoppingAffiliation", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ShoppingAffiliation findUnique
   */
  export type ShoppingAffiliationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingAffiliation
     */
    select?: ShoppingAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingAffiliation
     */
    omit?: ShoppingAffiliationOmit<ExtArgs> | null
    /**
     * Filter, which ShoppingAffiliation to fetch.
     */
    where: ShoppingAffiliationWhereUniqueInput
  }

  /**
   * ShoppingAffiliation findUniqueOrThrow
   */
  export type ShoppingAffiliationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingAffiliation
     */
    select?: ShoppingAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingAffiliation
     */
    omit?: ShoppingAffiliationOmit<ExtArgs> | null
    /**
     * Filter, which ShoppingAffiliation to fetch.
     */
    where: ShoppingAffiliationWhereUniqueInput
  }

  /**
   * ShoppingAffiliation findFirst
   */
  export type ShoppingAffiliationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingAffiliation
     */
    select?: ShoppingAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingAffiliation
     */
    omit?: ShoppingAffiliationOmit<ExtArgs> | null
    /**
     * Filter, which ShoppingAffiliation to fetch.
     */
    where?: ShoppingAffiliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingAffiliations to fetch.
     */
    orderBy?: ShoppingAffiliationOrderByWithRelationInput | ShoppingAffiliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingAffiliations.
     */
    cursor?: ShoppingAffiliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingAffiliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingAffiliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingAffiliations.
     */
    distinct?: ShoppingAffiliationScalarFieldEnum | ShoppingAffiliationScalarFieldEnum[]
  }

  /**
   * ShoppingAffiliation findFirstOrThrow
   */
  export type ShoppingAffiliationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingAffiliation
     */
    select?: ShoppingAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingAffiliation
     */
    omit?: ShoppingAffiliationOmit<ExtArgs> | null
    /**
     * Filter, which ShoppingAffiliation to fetch.
     */
    where?: ShoppingAffiliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingAffiliations to fetch.
     */
    orderBy?: ShoppingAffiliationOrderByWithRelationInput | ShoppingAffiliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingAffiliations.
     */
    cursor?: ShoppingAffiliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingAffiliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingAffiliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingAffiliations.
     */
    distinct?: ShoppingAffiliationScalarFieldEnum | ShoppingAffiliationScalarFieldEnum[]
  }

  /**
   * ShoppingAffiliation findMany
   */
  export type ShoppingAffiliationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingAffiliation
     */
    select?: ShoppingAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingAffiliation
     */
    omit?: ShoppingAffiliationOmit<ExtArgs> | null
    /**
     * Filter, which ShoppingAffiliations to fetch.
     */
    where?: ShoppingAffiliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingAffiliations to fetch.
     */
    orderBy?: ShoppingAffiliationOrderByWithRelationInput | ShoppingAffiliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingAffiliations.
     */
    cursor?: ShoppingAffiliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingAffiliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingAffiliations.
     */
    skip?: number
    distinct?: ShoppingAffiliationScalarFieldEnum | ShoppingAffiliationScalarFieldEnum[]
  }

  /**
   * ShoppingAffiliation create
   */
  export type ShoppingAffiliationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingAffiliation
     */
    select?: ShoppingAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingAffiliation
     */
    omit?: ShoppingAffiliationOmit<ExtArgs> | null
    /**
     * The data needed to create a ShoppingAffiliation.
     */
    data: XOR<ShoppingAffiliationCreateInput, ShoppingAffiliationUncheckedCreateInput>
  }

  /**
   * ShoppingAffiliation createMany
   */
  export type ShoppingAffiliationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShoppingAffiliations.
     */
    data: ShoppingAffiliationCreateManyInput | ShoppingAffiliationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShoppingAffiliation createManyAndReturn
   */
  export type ShoppingAffiliationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingAffiliation
     */
    select?: ShoppingAffiliationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingAffiliation
     */
    omit?: ShoppingAffiliationOmit<ExtArgs> | null
    /**
     * The data used to create many ShoppingAffiliations.
     */
    data: ShoppingAffiliationCreateManyInput | ShoppingAffiliationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShoppingAffiliation update
   */
  export type ShoppingAffiliationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingAffiliation
     */
    select?: ShoppingAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingAffiliation
     */
    omit?: ShoppingAffiliationOmit<ExtArgs> | null
    /**
     * The data needed to update a ShoppingAffiliation.
     */
    data: XOR<ShoppingAffiliationUpdateInput, ShoppingAffiliationUncheckedUpdateInput>
    /**
     * Choose, which ShoppingAffiliation to update.
     */
    where: ShoppingAffiliationWhereUniqueInput
  }

  /**
   * ShoppingAffiliation updateMany
   */
  export type ShoppingAffiliationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShoppingAffiliations.
     */
    data: XOR<ShoppingAffiliationUpdateManyMutationInput, ShoppingAffiliationUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingAffiliations to update
     */
    where?: ShoppingAffiliationWhereInput
    /**
     * Limit how many ShoppingAffiliations to update.
     */
    limit?: number
  }

  /**
   * ShoppingAffiliation updateManyAndReturn
   */
  export type ShoppingAffiliationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingAffiliation
     */
    select?: ShoppingAffiliationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingAffiliation
     */
    omit?: ShoppingAffiliationOmit<ExtArgs> | null
    /**
     * The data used to update ShoppingAffiliations.
     */
    data: XOR<ShoppingAffiliationUpdateManyMutationInput, ShoppingAffiliationUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingAffiliations to update
     */
    where?: ShoppingAffiliationWhereInput
    /**
     * Limit how many ShoppingAffiliations to update.
     */
    limit?: number
  }

  /**
   * ShoppingAffiliation upsert
   */
  export type ShoppingAffiliationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingAffiliation
     */
    select?: ShoppingAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingAffiliation
     */
    omit?: ShoppingAffiliationOmit<ExtArgs> | null
    /**
     * The filter to search for the ShoppingAffiliation to update in case it exists.
     */
    where: ShoppingAffiliationWhereUniqueInput
    /**
     * In case the ShoppingAffiliation found by the `where` argument doesn't exist, create a new ShoppingAffiliation with this data.
     */
    create: XOR<ShoppingAffiliationCreateInput, ShoppingAffiliationUncheckedCreateInput>
    /**
     * In case the ShoppingAffiliation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShoppingAffiliationUpdateInput, ShoppingAffiliationUncheckedUpdateInput>
  }

  /**
   * ShoppingAffiliation delete
   */
  export type ShoppingAffiliationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingAffiliation
     */
    select?: ShoppingAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingAffiliation
     */
    omit?: ShoppingAffiliationOmit<ExtArgs> | null
    /**
     * Filter which ShoppingAffiliation to delete.
     */
    where: ShoppingAffiliationWhereUniqueInput
  }

  /**
   * ShoppingAffiliation deleteMany
   */
  export type ShoppingAffiliationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingAffiliations to delete
     */
    where?: ShoppingAffiliationWhereInput
    /**
     * Limit how many ShoppingAffiliations to delete.
     */
    limit?: number
  }

  /**
   * ShoppingAffiliation without action
   */
  export type ShoppingAffiliationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingAffiliation
     */
    select?: ShoppingAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingAffiliation
     */
    omit?: ShoppingAffiliationOmit<ExtArgs> | null
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


  export const RecipeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    creatorId: 'creatorId',
    content: 'content',
    tags: 'tags',
    totalCookingTime: 'totalCookingTime',
    createdAt: 'createdAt'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const PlanningEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    recipeId: 'recipeId',
    nbPortions: 'nbPortions'
  };

  export type PlanningEntryScalarFieldEnum = (typeof PlanningEntryScalarFieldEnum)[keyof typeof PlanningEntryScalarFieldEnum]


  export const PantryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    content: 'content'
  };

  export type PantryScalarFieldEnum = (typeof PantryScalarFieldEnum)[keyof typeof PantryScalarFieldEnum]


  export const PlansScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    billingCycle: 'billingCycle'
  };

  export type PlansScalarFieldEnum = (typeof PlansScalarFieldEnum)[keyof typeof PlansScalarFieldEnum]


  export const SubscriptionsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    status: 'status',
    startDate: 'startDate',
    remainingDays: 'remainingDays'
  };

  export type SubscriptionsScalarFieldEnum = (typeof SubscriptionsScalarFieldEnum)[keyof typeof SubscriptionsScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subscriptionId: 'subscriptionId',
    amount: 'amount',
    paymentDate: 'paymentDate'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const ShoppingAffiliationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    trackingUrl: 'trackingUrl',
    amount: 'amount'
  };

  export type ShoppingAffiliationScalarFieldEnum = (typeof ShoppingAffiliationScalarFieldEnum)[keyof typeof ShoppingAffiliationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: UuidFilter<"Recipe"> | string
    name?: StringFilter<"Recipe"> | string
    creatorId?: UuidNullableFilter<"Recipe"> | string | null
    content?: JsonNullableFilter<"Recipe">
    tags?: StringNullableListFilter<"Recipe">
    totalCookingTime?: IntNullableFilter<"Recipe"> | number | null
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    PlanningEntries?: PlanningEntryListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    tags?: SortOrder
    totalCookingTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    PlanningEntries?: PlanningEntryOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    name?: StringFilter<"Recipe"> | string
    creatorId?: UuidNullableFilter<"Recipe"> | string | null
    content?: JsonNullableFilter<"Recipe">
    tags?: StringNullableListFilter<"Recipe">
    totalCookingTime?: IntNullableFilter<"Recipe"> | number | null
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    PlanningEntries?: PlanningEntryListRelationFilter
  }, "id">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    tags?: SortOrder
    totalCookingTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Recipe"> | string
    name?: StringWithAggregatesFilter<"Recipe"> | string
    creatorId?: UuidNullableWithAggregatesFilter<"Recipe"> | string | null
    content?: JsonNullableWithAggregatesFilter<"Recipe">
    tags?: StringNullableListFilter<"Recipe">
    totalCookingTime?: IntNullableWithAggregatesFilter<"Recipe"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
  }

  export type PlanningEntryWhereInput = {
    AND?: PlanningEntryWhereInput | PlanningEntryWhereInput[]
    OR?: PlanningEntryWhereInput[]
    NOT?: PlanningEntryWhereInput | PlanningEntryWhereInput[]
    id?: IntFilter<"PlanningEntry"> | number
    userId?: UuidFilter<"PlanningEntry"> | string
    recipeId?: UuidFilter<"PlanningEntry"> | string
    nbPortions?: IntFilter<"PlanningEntry"> | number
    Recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type PlanningEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    nbPortions?: SortOrder
    Recipe?: RecipeOrderByWithRelationInput
  }

  export type PlanningEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlanningEntryWhereInput | PlanningEntryWhereInput[]
    OR?: PlanningEntryWhereInput[]
    NOT?: PlanningEntryWhereInput | PlanningEntryWhereInput[]
    userId?: UuidFilter<"PlanningEntry"> | string
    recipeId?: UuidFilter<"PlanningEntry"> | string
    nbPortions?: IntFilter<"PlanningEntry"> | number
    Recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id">

  export type PlanningEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    nbPortions?: SortOrder
    _count?: PlanningEntryCountOrderByAggregateInput
    _avg?: PlanningEntryAvgOrderByAggregateInput
    _max?: PlanningEntryMaxOrderByAggregateInput
    _min?: PlanningEntryMinOrderByAggregateInput
    _sum?: PlanningEntrySumOrderByAggregateInput
  }

  export type PlanningEntryScalarWhereWithAggregatesInput = {
    AND?: PlanningEntryScalarWhereWithAggregatesInput | PlanningEntryScalarWhereWithAggregatesInput[]
    OR?: PlanningEntryScalarWhereWithAggregatesInput[]
    NOT?: PlanningEntryScalarWhereWithAggregatesInput | PlanningEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlanningEntry"> | number
    userId?: UuidWithAggregatesFilter<"PlanningEntry"> | string
    recipeId?: UuidWithAggregatesFilter<"PlanningEntry"> | string
    nbPortions?: IntWithAggregatesFilter<"PlanningEntry"> | number
  }

  export type PantryWhereInput = {
    AND?: PantryWhereInput | PantryWhereInput[]
    OR?: PantryWhereInput[]
    NOT?: PantryWhereInput | PantryWhereInput[]
    id?: IntFilter<"Pantry"> | number
    userId?: UuidFilter<"Pantry"> | string
    content?: JsonNullableFilter<"Pantry">
  }

  export type PantryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrderInput | SortOrder
  }

  export type PantryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: PantryWhereInput | PantryWhereInput[]
    OR?: PantryWhereInput[]
    NOT?: PantryWhereInput | PantryWhereInput[]
    content?: JsonNullableFilter<"Pantry">
  }, "id" | "userId">

  export type PantryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrderInput | SortOrder
    _count?: PantryCountOrderByAggregateInput
    _avg?: PantryAvgOrderByAggregateInput
    _max?: PantryMaxOrderByAggregateInput
    _min?: PantryMinOrderByAggregateInput
    _sum?: PantrySumOrderByAggregateInput
  }

  export type PantryScalarWhereWithAggregatesInput = {
    AND?: PantryScalarWhereWithAggregatesInput | PantryScalarWhereWithAggregatesInput[]
    OR?: PantryScalarWhereWithAggregatesInput[]
    NOT?: PantryScalarWhereWithAggregatesInput | PantryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pantry"> | number
    userId?: UuidWithAggregatesFilter<"Pantry"> | string
    content?: JsonNullableWithAggregatesFilter<"Pantry">
  }

  export type PlansWhereInput = {
    AND?: PlansWhereInput | PlansWhereInput[]
    OR?: PlansWhereInput[]
    NOT?: PlansWhereInput | PlansWhereInput[]
    id?: IntFilter<"Plans"> | number
    name?: StringFilter<"Plans"> | string
    price?: FloatFilter<"Plans"> | number
    billingCycle?: StringFilter<"Plans"> | string
    Subscriptions?: SubscriptionsListRelationFilter
  }

  export type PlansOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    billingCycle?: SortOrder
    Subscriptions?: SubscriptionsOrderByRelationAggregateInput
  }

  export type PlansWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlansWhereInput | PlansWhereInput[]
    OR?: PlansWhereInput[]
    NOT?: PlansWhereInput | PlansWhereInput[]
    name?: StringFilter<"Plans"> | string
    price?: FloatFilter<"Plans"> | number
    billingCycle?: StringFilter<"Plans"> | string
    Subscriptions?: SubscriptionsListRelationFilter
  }, "id">

  export type PlansOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    billingCycle?: SortOrder
    _count?: PlansCountOrderByAggregateInput
    _avg?: PlansAvgOrderByAggregateInput
    _max?: PlansMaxOrderByAggregateInput
    _min?: PlansMinOrderByAggregateInput
    _sum?: PlansSumOrderByAggregateInput
  }

  export type PlansScalarWhereWithAggregatesInput = {
    AND?: PlansScalarWhereWithAggregatesInput | PlansScalarWhereWithAggregatesInput[]
    OR?: PlansScalarWhereWithAggregatesInput[]
    NOT?: PlansScalarWhereWithAggregatesInput | PlansScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plans"> | number
    name?: StringWithAggregatesFilter<"Plans"> | string
    price?: FloatWithAggregatesFilter<"Plans"> | number
    billingCycle?: StringWithAggregatesFilter<"Plans"> | string
  }

  export type SubscriptionsWhereInput = {
    AND?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    OR?: SubscriptionsWhereInput[]
    NOT?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    id?: UuidFilter<"Subscriptions"> | string
    userId?: UuidFilter<"Subscriptions"> | string
    planId?: IntNullableFilter<"Subscriptions"> | number | null
    status?: IntFilter<"Subscriptions"> | number
    startDate?: DateTimeFilter<"Subscriptions"> | Date | string
    remainingDays?: IntNullableFilter<"Subscriptions"> | number | null
    Plan?: XOR<PlansNullableScalarRelationFilter, PlansWhereInput> | null
    Payments?: PaymentsListRelationFilter
  }

  export type SubscriptionsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrder
    remainingDays?: SortOrderInput | SortOrder
    Plan?: PlansOrderByWithRelationInput
    Payments?: PaymentsOrderByRelationAggregateInput
  }

  export type SubscriptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    OR?: SubscriptionsWhereInput[]
    NOT?: SubscriptionsWhereInput | SubscriptionsWhereInput[]
    userId?: UuidFilter<"Subscriptions"> | string
    planId?: IntNullableFilter<"Subscriptions"> | number | null
    status?: IntFilter<"Subscriptions"> | number
    startDate?: DateTimeFilter<"Subscriptions"> | Date | string
    remainingDays?: IntNullableFilter<"Subscriptions"> | number | null
    Plan?: XOR<PlansNullableScalarRelationFilter, PlansWhereInput> | null
    Payments?: PaymentsListRelationFilter
  }, "id">

  export type SubscriptionsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrder
    remainingDays?: SortOrderInput | SortOrder
    _count?: SubscriptionsCountOrderByAggregateInput
    _avg?: SubscriptionsAvgOrderByAggregateInput
    _max?: SubscriptionsMaxOrderByAggregateInput
    _min?: SubscriptionsMinOrderByAggregateInput
    _sum?: SubscriptionsSumOrderByAggregateInput
  }

  export type SubscriptionsScalarWhereWithAggregatesInput = {
    AND?: SubscriptionsScalarWhereWithAggregatesInput | SubscriptionsScalarWhereWithAggregatesInput[]
    OR?: SubscriptionsScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionsScalarWhereWithAggregatesInput | SubscriptionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Subscriptions"> | string
    userId?: UuidWithAggregatesFilter<"Subscriptions"> | string
    planId?: IntNullableWithAggregatesFilter<"Subscriptions"> | number | null
    status?: IntWithAggregatesFilter<"Subscriptions"> | number
    startDate?: DateTimeWithAggregatesFilter<"Subscriptions"> | Date | string
    remainingDays?: IntNullableWithAggregatesFilter<"Subscriptions"> | number | null
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    id?: IntFilter<"Payments"> | number
    userId?: UuidFilter<"Payments"> | string
    subscriptionId?: UuidFilter<"Payments"> | string
    amount?: FloatFilter<"Payments"> | number
    paymentDate?: DateTimeFilter<"Payments"> | Date | string
    Subscription?: XOR<SubscriptionsScalarRelationFilter, SubscriptionsWhereInput>
  }

  export type PaymentsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    Subscription?: SubscriptionsOrderByWithRelationInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    userId?: UuidFilter<"Payments"> | string
    subscriptionId?: UuidFilter<"Payments"> | string
    amount?: FloatFilter<"Payments"> | number
    paymentDate?: DateTimeFilter<"Payments"> | Date | string
    Subscription?: XOR<SubscriptionsScalarRelationFilter, SubscriptionsWhereInput>
  }, "id">

  export type PaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payments"> | number
    userId?: UuidWithAggregatesFilter<"Payments"> | string
    subscriptionId?: UuidWithAggregatesFilter<"Payments"> | string
    amount?: FloatWithAggregatesFilter<"Payments"> | number
    paymentDate?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
  }

  export type ShoppingAffiliationWhereInput = {
    AND?: ShoppingAffiliationWhereInput | ShoppingAffiliationWhereInput[]
    OR?: ShoppingAffiliationWhereInput[]
    NOT?: ShoppingAffiliationWhereInput | ShoppingAffiliationWhereInput[]
    id?: UuidFilter<"ShoppingAffiliation"> | string
    userId?: UuidNullableFilter<"ShoppingAffiliation"> | string | null
    trackingUrl?: StringFilter<"ShoppingAffiliation"> | string
    amount?: FloatFilter<"ShoppingAffiliation"> | number
  }

  export type ShoppingAffiliationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    trackingUrl?: SortOrder
    amount?: SortOrder
  }

  export type ShoppingAffiliationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShoppingAffiliationWhereInput | ShoppingAffiliationWhereInput[]
    OR?: ShoppingAffiliationWhereInput[]
    NOT?: ShoppingAffiliationWhereInput | ShoppingAffiliationWhereInput[]
    userId?: UuidNullableFilter<"ShoppingAffiliation"> | string | null
    trackingUrl?: StringFilter<"ShoppingAffiliation"> | string
    amount?: FloatFilter<"ShoppingAffiliation"> | number
  }, "id">

  export type ShoppingAffiliationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    trackingUrl?: SortOrder
    amount?: SortOrder
    _count?: ShoppingAffiliationCountOrderByAggregateInput
    _avg?: ShoppingAffiliationAvgOrderByAggregateInput
    _max?: ShoppingAffiliationMaxOrderByAggregateInput
    _min?: ShoppingAffiliationMinOrderByAggregateInput
    _sum?: ShoppingAffiliationSumOrderByAggregateInput
  }

  export type ShoppingAffiliationScalarWhereWithAggregatesInput = {
    AND?: ShoppingAffiliationScalarWhereWithAggregatesInput | ShoppingAffiliationScalarWhereWithAggregatesInput[]
    OR?: ShoppingAffiliationScalarWhereWithAggregatesInput[]
    NOT?: ShoppingAffiliationScalarWhereWithAggregatesInput | ShoppingAffiliationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ShoppingAffiliation"> | string
    userId?: UuidNullableWithAggregatesFilter<"ShoppingAffiliation"> | string | null
    trackingUrl?: StringWithAggregatesFilter<"ShoppingAffiliation"> | string
    amount?: FloatWithAggregatesFilter<"ShoppingAffiliation"> | number
  }

  export type RecipeCreateInput = {
    id?: string
    name: string
    creatorId?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    tags?: RecipeCreatetagsInput | string[]
    totalCookingTime?: number | null
    createdAt?: Date | string
    PlanningEntries?: PlanningEntryCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: string
    name: string
    creatorId?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    tags?: RecipeCreatetagsInput | string[]
    totalCookingTime?: number | null
    createdAt?: Date | string
    PlanningEntries?: PlanningEntryUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    tags?: RecipeUpdatetagsInput | string[]
    totalCookingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlanningEntries?: PlanningEntryUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    tags?: RecipeUpdatetagsInput | string[]
    totalCookingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlanningEntries?: PlanningEntryUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: string
    name: string
    creatorId?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    tags?: RecipeCreatetagsInput | string[]
    totalCookingTime?: number | null
    createdAt?: Date | string
  }

  export type RecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    tags?: RecipeUpdatetagsInput | string[]
    totalCookingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    tags?: RecipeUpdatetagsInput | string[]
    totalCookingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanningEntryCreateInput = {
    userId: string
    nbPortions: number
    Recipe: RecipeCreateNestedOneWithoutPlanningEntriesInput
  }

  export type PlanningEntryUncheckedCreateInput = {
    id?: number
    userId: string
    recipeId: string
    nbPortions: number
  }

  export type PlanningEntryUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    nbPortions?: IntFieldUpdateOperationsInput | number
    Recipe?: RecipeUpdateOneRequiredWithoutPlanningEntriesNestedInput
  }

  export type PlanningEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    nbPortions?: IntFieldUpdateOperationsInput | number
  }

  export type PlanningEntryCreateManyInput = {
    id?: number
    userId: string
    recipeId: string
    nbPortions: number
  }

  export type PlanningEntryUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    nbPortions?: IntFieldUpdateOperationsInput | number
  }

  export type PlanningEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    nbPortions?: IntFieldUpdateOperationsInput | number
  }

  export type PantryCreateInput = {
    userId: string
    content?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PantryUncheckedCreateInput = {
    id?: number
    userId: string
    content?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PantryUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PantryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PantryCreateManyInput = {
    id?: number
    userId: string
    content?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PantryUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PantryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PlansCreateInput = {
    name: string
    price: number
    billingCycle: string
    Subscriptions?: SubscriptionsCreateNestedManyWithoutPlanInput
  }

  export type PlansUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    billingCycle: string
    Subscriptions?: SubscriptionsUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlansUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    billingCycle?: StringFieldUpdateOperationsInput | string
    Subscriptions?: SubscriptionsUpdateManyWithoutPlanNestedInput
  }

  export type PlansUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    billingCycle?: StringFieldUpdateOperationsInput | string
    Subscriptions?: SubscriptionsUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlansCreateManyInput = {
    id?: number
    name: string
    price: number
    billingCycle: string
  }

  export type PlansUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    billingCycle?: StringFieldUpdateOperationsInput | string
  }

  export type PlansUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    billingCycle?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionsCreateInput = {
    id?: string
    userId: string
    status: number
    startDate?: Date | string
    remainingDays?: number | null
    Plan?: PlansCreateNestedOneWithoutSubscriptionsInput
    Payments?: PaymentsCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionsUncheckedCreateInput = {
    id?: string
    userId: string
    planId?: number | null
    status: number
    startDate?: Date | string
    remainingDays?: number | null
    Payments?: PaymentsUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingDays?: NullableIntFieldUpdateOperationsInput | number | null
    Plan?: PlansUpdateOneWithoutSubscriptionsNestedInput
    Payments?: PaymentsUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingDays?: NullableIntFieldUpdateOperationsInput | number | null
    Payments?: PaymentsUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionsCreateManyInput = {
    id?: string
    userId: string
    planId?: number | null
    status: number
    startDate?: Date | string
    remainingDays?: number | null
  }

  export type SubscriptionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingDays?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubscriptionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingDays?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentsCreateInput = {
    userId: string
    amount: number
    paymentDate?: Date | string
    Subscription: SubscriptionsCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateInput = {
    id?: number
    userId: string
    subscriptionId: string
    amount: number
    paymentDate?: Date | string
  }

  export type PaymentsUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscription?: SubscriptionsUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateManyInput = {
    id?: number
    userId: string
    subscriptionId: string
    amount: number
    paymentDate?: Date | string
  }

  export type PaymentsUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingAffiliationCreateInput = {
    id?: string
    userId?: string | null
    trackingUrl: string
    amount: number
  }

  export type ShoppingAffiliationUncheckedCreateInput = {
    id?: string
    userId?: string | null
    trackingUrl: string
    amount: number
  }

  export type ShoppingAffiliationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingUrl?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type ShoppingAffiliationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingUrl?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type ShoppingAffiliationCreateManyInput = {
    id?: string
    userId?: string | null
    trackingUrl: string
    amount: number
  }

  export type ShoppingAffiliationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingUrl?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type ShoppingAffiliationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingUrl?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type PlanningEntryListRelationFilter = {
    every?: PlanningEntryWhereInput
    some?: PlanningEntryWhereInput
    none?: PlanningEntryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlanningEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    totalCookingTime?: SortOrder
    createdAt?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    totalCookingTime?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
    totalCookingTime?: SortOrder
    createdAt?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
    totalCookingTime?: SortOrder
    createdAt?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    totalCookingTime?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type PlanningEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    nbPortions?: SortOrder
  }

  export type PlanningEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    nbPortions?: SortOrder
  }

  export type PlanningEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    nbPortions?: SortOrder
  }

  export type PlanningEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    nbPortions?: SortOrder
  }

  export type PlanningEntrySumOrderByAggregateInput = {
    id?: SortOrder
    nbPortions?: SortOrder
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

  export type PantryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
  }

  export type PantryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PantryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PantryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PantrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SubscriptionsListRelationFilter = {
    every?: SubscriptionsWhereInput
    some?: SubscriptionsWhereInput
    none?: SubscriptionsWhereInput
  }

  export type SubscriptionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlansCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    billingCycle?: SortOrder
  }

  export type PlansAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type PlansMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    billingCycle?: SortOrder
  }

  export type PlansMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    billingCycle?: SortOrder
  }

  export type PlansSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PlansNullableScalarRelationFilter = {
    is?: PlansWhereInput | null
    isNot?: PlansWhereInput | null
  }

  export type PaymentsListRelationFilter = {
    every?: PaymentsWhereInput
    some?: PaymentsWhereInput
    none?: PaymentsWhereInput
  }

  export type PaymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    remainingDays?: SortOrder
  }

  export type SubscriptionsAvgOrderByAggregateInput = {
    planId?: SortOrder
    status?: SortOrder
    remainingDays?: SortOrder
  }

  export type SubscriptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    remainingDays?: SortOrder
  }

  export type SubscriptionsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    remainingDays?: SortOrder
  }

  export type SubscriptionsSumOrderByAggregateInput = {
    planId?: SortOrder
    status?: SortOrder
    remainingDays?: SortOrder
  }

  export type SubscriptionsScalarRelationFilter = {
    is?: SubscriptionsWhereInput
    isNot?: SubscriptionsWhereInput
  }

  export type PaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type ShoppingAffiliationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackingUrl?: SortOrder
    amount?: SortOrder
  }

  export type ShoppingAffiliationAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ShoppingAffiliationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackingUrl?: SortOrder
    amount?: SortOrder
  }

  export type ShoppingAffiliationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackingUrl?: SortOrder
    amount?: SortOrder
  }

  export type ShoppingAffiliationSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type RecipeCreatetagsInput = {
    set: string[]
  }

  export type PlanningEntryCreateNestedManyWithoutRecipeInput = {
    create?: XOR<PlanningEntryCreateWithoutRecipeInput, PlanningEntryUncheckedCreateWithoutRecipeInput> | PlanningEntryCreateWithoutRecipeInput[] | PlanningEntryUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: PlanningEntryCreateOrConnectWithoutRecipeInput | PlanningEntryCreateOrConnectWithoutRecipeInput[]
    createMany?: PlanningEntryCreateManyRecipeInputEnvelope
    connect?: PlanningEntryWhereUniqueInput | PlanningEntryWhereUniqueInput[]
  }

  export type PlanningEntryUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<PlanningEntryCreateWithoutRecipeInput, PlanningEntryUncheckedCreateWithoutRecipeInput> | PlanningEntryCreateWithoutRecipeInput[] | PlanningEntryUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: PlanningEntryCreateOrConnectWithoutRecipeInput | PlanningEntryCreateOrConnectWithoutRecipeInput[]
    createMany?: PlanningEntryCreateManyRecipeInputEnvelope
    connect?: PlanningEntryWhereUniqueInput | PlanningEntryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RecipeUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlanningEntryUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<PlanningEntryCreateWithoutRecipeInput, PlanningEntryUncheckedCreateWithoutRecipeInput> | PlanningEntryCreateWithoutRecipeInput[] | PlanningEntryUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: PlanningEntryCreateOrConnectWithoutRecipeInput | PlanningEntryCreateOrConnectWithoutRecipeInput[]
    upsert?: PlanningEntryUpsertWithWhereUniqueWithoutRecipeInput | PlanningEntryUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: PlanningEntryCreateManyRecipeInputEnvelope
    set?: PlanningEntryWhereUniqueInput | PlanningEntryWhereUniqueInput[]
    disconnect?: PlanningEntryWhereUniqueInput | PlanningEntryWhereUniqueInput[]
    delete?: PlanningEntryWhereUniqueInput | PlanningEntryWhereUniqueInput[]
    connect?: PlanningEntryWhereUniqueInput | PlanningEntryWhereUniqueInput[]
    update?: PlanningEntryUpdateWithWhereUniqueWithoutRecipeInput | PlanningEntryUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: PlanningEntryUpdateManyWithWhereWithoutRecipeInput | PlanningEntryUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: PlanningEntryScalarWhereInput | PlanningEntryScalarWhereInput[]
  }

  export type PlanningEntryUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<PlanningEntryCreateWithoutRecipeInput, PlanningEntryUncheckedCreateWithoutRecipeInput> | PlanningEntryCreateWithoutRecipeInput[] | PlanningEntryUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: PlanningEntryCreateOrConnectWithoutRecipeInput | PlanningEntryCreateOrConnectWithoutRecipeInput[]
    upsert?: PlanningEntryUpsertWithWhereUniqueWithoutRecipeInput | PlanningEntryUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: PlanningEntryCreateManyRecipeInputEnvelope
    set?: PlanningEntryWhereUniqueInput | PlanningEntryWhereUniqueInput[]
    disconnect?: PlanningEntryWhereUniqueInput | PlanningEntryWhereUniqueInput[]
    delete?: PlanningEntryWhereUniqueInput | PlanningEntryWhereUniqueInput[]
    connect?: PlanningEntryWhereUniqueInput | PlanningEntryWhereUniqueInput[]
    update?: PlanningEntryUpdateWithWhereUniqueWithoutRecipeInput | PlanningEntryUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: PlanningEntryUpdateManyWithWhereWithoutRecipeInput | PlanningEntryUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: PlanningEntryScalarWhereInput | PlanningEntryScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutPlanningEntriesInput = {
    create?: XOR<RecipeCreateWithoutPlanningEntriesInput, RecipeUncheckedCreateWithoutPlanningEntriesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutPlanningEntriesInput
    connect?: RecipeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipeUpdateOneRequiredWithoutPlanningEntriesNestedInput = {
    create?: XOR<RecipeCreateWithoutPlanningEntriesInput, RecipeUncheckedCreateWithoutPlanningEntriesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutPlanningEntriesInput
    upsert?: RecipeUpsertWithoutPlanningEntriesInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutPlanningEntriesInput, RecipeUpdateWithoutPlanningEntriesInput>, RecipeUncheckedUpdateWithoutPlanningEntriesInput>
  }

  export type SubscriptionsCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput> | SubscriptionsCreateWithoutPlanInput[] | SubscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPlanInput | SubscriptionsCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionsCreateManyPlanInputEnvelope
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
  }

  export type SubscriptionsUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput> | SubscriptionsCreateWithoutPlanInput[] | SubscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPlanInput | SubscriptionsCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionsCreateManyPlanInputEnvelope
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubscriptionsUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput> | SubscriptionsCreateWithoutPlanInput[] | SubscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPlanInput | SubscriptionsCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionsUpsertWithWhereUniqueWithoutPlanInput | SubscriptionsUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionsCreateManyPlanInputEnvelope
    set?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    disconnect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    delete?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    update?: SubscriptionsUpdateWithWhereUniqueWithoutPlanInput | SubscriptionsUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionsUpdateManyWithWhereWithoutPlanInput | SubscriptionsUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
  }

  export type SubscriptionsUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput> | SubscriptionsCreateWithoutPlanInput[] | SubscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPlanInput | SubscriptionsCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionsUpsertWithWhereUniqueWithoutPlanInput | SubscriptionsUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionsCreateManyPlanInputEnvelope
    set?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    disconnect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    delete?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    connect?: SubscriptionsWhereUniqueInput | SubscriptionsWhereUniqueInput[]
    update?: SubscriptionsUpdateWithWhereUniqueWithoutPlanInput | SubscriptionsUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionsUpdateManyWithWhereWithoutPlanInput | SubscriptionsUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
  }

  export type PlansCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<PlansCreateWithoutSubscriptionsInput, PlansUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlansCreateOrConnectWithoutSubscriptionsInput
    connect?: PlansWhereUniqueInput
  }

  export type PaymentsCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput> | PaymentsCreateWithoutSubscriptionInput[] | PaymentsUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSubscriptionInput | PaymentsCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentsCreateManySubscriptionInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput> | PaymentsCreateWithoutSubscriptionInput[] | PaymentsUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSubscriptionInput | PaymentsCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentsCreateManySubscriptionInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type PlansUpdateOneWithoutSubscriptionsNestedInput = {
    create?: XOR<PlansCreateWithoutSubscriptionsInput, PlansUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlansCreateOrConnectWithoutSubscriptionsInput
    upsert?: PlansUpsertWithoutSubscriptionsInput
    disconnect?: PlansWhereInput | boolean
    delete?: PlansWhereInput | boolean
    connect?: PlansWhereUniqueInput
    update?: XOR<XOR<PlansUpdateToOneWithWhereWithoutSubscriptionsInput, PlansUpdateWithoutSubscriptionsInput>, PlansUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PaymentsUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput> | PaymentsCreateWithoutSubscriptionInput[] | PaymentsUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSubscriptionInput | PaymentsCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentsUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentsCreateManySubscriptionInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentsUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutSubscriptionInput | PaymentsUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput> | PaymentsCreateWithoutSubscriptionInput[] | PaymentsUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSubscriptionInput | PaymentsCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentsUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentsCreateManySubscriptionInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentsUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutSubscriptionInput | PaymentsUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type SubscriptionsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SubscriptionsCreateWithoutPaymentsInput, SubscriptionsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPaymentsInput
    connect?: SubscriptionsWhereUniqueInput
  }

  export type SubscriptionsUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<SubscriptionsCreateWithoutPaymentsInput, SubscriptionsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionsCreateOrConnectWithoutPaymentsInput
    upsert?: SubscriptionsUpsertWithoutPaymentsInput
    connect?: SubscriptionsWhereUniqueInput
    update?: XOR<XOR<SubscriptionsUpdateToOneWithWhereWithoutPaymentsInput, SubscriptionsUpdateWithoutPaymentsInput>, SubscriptionsUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PlanningEntryCreateWithoutRecipeInput = {
    userId: string
    nbPortions: number
  }

  export type PlanningEntryUncheckedCreateWithoutRecipeInput = {
    id?: number
    userId: string
    nbPortions: number
  }

  export type PlanningEntryCreateOrConnectWithoutRecipeInput = {
    where: PlanningEntryWhereUniqueInput
    create: XOR<PlanningEntryCreateWithoutRecipeInput, PlanningEntryUncheckedCreateWithoutRecipeInput>
  }

  export type PlanningEntryCreateManyRecipeInputEnvelope = {
    data: PlanningEntryCreateManyRecipeInput | PlanningEntryCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type PlanningEntryUpsertWithWhereUniqueWithoutRecipeInput = {
    where: PlanningEntryWhereUniqueInput
    update: XOR<PlanningEntryUpdateWithoutRecipeInput, PlanningEntryUncheckedUpdateWithoutRecipeInput>
    create: XOR<PlanningEntryCreateWithoutRecipeInput, PlanningEntryUncheckedCreateWithoutRecipeInput>
  }

  export type PlanningEntryUpdateWithWhereUniqueWithoutRecipeInput = {
    where: PlanningEntryWhereUniqueInput
    data: XOR<PlanningEntryUpdateWithoutRecipeInput, PlanningEntryUncheckedUpdateWithoutRecipeInput>
  }

  export type PlanningEntryUpdateManyWithWhereWithoutRecipeInput = {
    where: PlanningEntryScalarWhereInput
    data: XOR<PlanningEntryUpdateManyMutationInput, PlanningEntryUncheckedUpdateManyWithoutRecipeInput>
  }

  export type PlanningEntryScalarWhereInput = {
    AND?: PlanningEntryScalarWhereInput | PlanningEntryScalarWhereInput[]
    OR?: PlanningEntryScalarWhereInput[]
    NOT?: PlanningEntryScalarWhereInput | PlanningEntryScalarWhereInput[]
    id?: IntFilter<"PlanningEntry"> | number
    userId?: UuidFilter<"PlanningEntry"> | string
    recipeId?: UuidFilter<"PlanningEntry"> | string
    nbPortions?: IntFilter<"PlanningEntry"> | number
  }

  export type RecipeCreateWithoutPlanningEntriesInput = {
    id?: string
    name: string
    creatorId?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    tags?: RecipeCreatetagsInput | string[]
    totalCookingTime?: number | null
    createdAt?: Date | string
  }

  export type RecipeUncheckedCreateWithoutPlanningEntriesInput = {
    id?: string
    name: string
    creatorId?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    tags?: RecipeCreatetagsInput | string[]
    totalCookingTime?: number | null
    createdAt?: Date | string
  }

  export type RecipeCreateOrConnectWithoutPlanningEntriesInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutPlanningEntriesInput, RecipeUncheckedCreateWithoutPlanningEntriesInput>
  }

  export type RecipeUpsertWithoutPlanningEntriesInput = {
    update: XOR<RecipeUpdateWithoutPlanningEntriesInput, RecipeUncheckedUpdateWithoutPlanningEntriesInput>
    create: XOR<RecipeCreateWithoutPlanningEntriesInput, RecipeUncheckedCreateWithoutPlanningEntriesInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutPlanningEntriesInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutPlanningEntriesInput, RecipeUncheckedUpdateWithoutPlanningEntriesInput>
  }

  export type RecipeUpdateWithoutPlanningEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    tags?: RecipeUpdatetagsInput | string[]
    totalCookingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateWithoutPlanningEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    tags?: RecipeUpdatetagsInput | string[]
    totalCookingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionsCreateWithoutPlanInput = {
    id?: string
    userId: string
    status: number
    startDate?: Date | string
    remainingDays?: number | null
    Payments?: PaymentsCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionsUncheckedCreateWithoutPlanInput = {
    id?: string
    userId: string
    status: number
    startDate?: Date | string
    remainingDays?: number | null
    Payments?: PaymentsUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionsCreateOrConnectWithoutPlanInput = {
    where: SubscriptionsWhereUniqueInput
    create: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionsCreateManyPlanInputEnvelope = {
    data: SubscriptionsCreateManyPlanInput | SubscriptionsCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionsUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionsWhereUniqueInput
    update: XOR<SubscriptionsUpdateWithoutPlanInput, SubscriptionsUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionsCreateWithoutPlanInput, SubscriptionsUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionsUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionsWhereUniqueInput
    data: XOR<SubscriptionsUpdateWithoutPlanInput, SubscriptionsUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionsUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionsScalarWhereInput
    data: XOR<SubscriptionsUpdateManyMutationInput, SubscriptionsUncheckedUpdateManyWithoutPlanInput>
  }

  export type SubscriptionsScalarWhereInput = {
    AND?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
    OR?: SubscriptionsScalarWhereInput[]
    NOT?: SubscriptionsScalarWhereInput | SubscriptionsScalarWhereInput[]
    id?: UuidFilter<"Subscriptions"> | string
    userId?: UuidFilter<"Subscriptions"> | string
    planId?: IntNullableFilter<"Subscriptions"> | number | null
    status?: IntFilter<"Subscriptions"> | number
    startDate?: DateTimeFilter<"Subscriptions"> | Date | string
    remainingDays?: IntNullableFilter<"Subscriptions"> | number | null
  }

  export type PlansCreateWithoutSubscriptionsInput = {
    name: string
    price: number
    billingCycle: string
  }

  export type PlansUncheckedCreateWithoutSubscriptionsInput = {
    id?: number
    name: string
    price: number
    billingCycle: string
  }

  export type PlansCreateOrConnectWithoutSubscriptionsInput = {
    where: PlansWhereUniqueInput
    create: XOR<PlansCreateWithoutSubscriptionsInput, PlansUncheckedCreateWithoutSubscriptionsInput>
  }

  export type PaymentsCreateWithoutSubscriptionInput = {
    userId: string
    amount: number
    paymentDate?: Date | string
  }

  export type PaymentsUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    userId: string
    amount: number
    paymentDate?: Date | string
  }

  export type PaymentsCreateOrConnectWithoutSubscriptionInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentsCreateManySubscriptionInputEnvelope = {
    data: PaymentsCreateManySubscriptionInput | PaymentsCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type PlansUpsertWithoutSubscriptionsInput = {
    update: XOR<PlansUpdateWithoutSubscriptionsInput, PlansUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<PlansCreateWithoutSubscriptionsInput, PlansUncheckedCreateWithoutSubscriptionsInput>
    where?: PlansWhereInput
  }

  export type PlansUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: PlansWhereInput
    data: XOR<PlansUpdateWithoutSubscriptionsInput, PlansUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlansUpdateWithoutSubscriptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    billingCycle?: StringFieldUpdateOperationsInput | string
  }

  export type PlansUncheckedUpdateWithoutSubscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    billingCycle?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentsUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentsWhereUniqueInput
    update: XOR<PaymentsUpdateWithoutSubscriptionInput, PaymentsUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentsUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentsWhereUniqueInput
    data: XOR<PaymentsUpdateWithoutSubscriptionInput, PaymentsUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentsUpdateManyWithWhereWithoutSubscriptionInput = {
    where: PaymentsScalarWhereInput
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type PaymentsScalarWhereInput = {
    AND?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    OR?: PaymentsScalarWhereInput[]
    NOT?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    id?: IntFilter<"Payments"> | number
    userId?: UuidFilter<"Payments"> | string
    subscriptionId?: UuidFilter<"Payments"> | string
    amount?: FloatFilter<"Payments"> | number
    paymentDate?: DateTimeFilter<"Payments"> | Date | string
  }

  export type SubscriptionsCreateWithoutPaymentsInput = {
    id?: string
    userId: string
    status: number
    startDate?: Date | string
    remainingDays?: number | null
    Plan?: PlansCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionsUncheckedCreateWithoutPaymentsInput = {
    id?: string
    userId: string
    planId?: number | null
    status: number
    startDate?: Date | string
    remainingDays?: number | null
  }

  export type SubscriptionsCreateOrConnectWithoutPaymentsInput = {
    where: SubscriptionsWhereUniqueInput
    create: XOR<SubscriptionsCreateWithoutPaymentsInput, SubscriptionsUncheckedCreateWithoutPaymentsInput>
  }

  export type SubscriptionsUpsertWithoutPaymentsInput = {
    update: XOR<SubscriptionsUpdateWithoutPaymentsInput, SubscriptionsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SubscriptionsCreateWithoutPaymentsInput, SubscriptionsUncheckedCreateWithoutPaymentsInput>
    where?: SubscriptionsWhereInput
  }

  export type SubscriptionsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SubscriptionsWhereInput
    data: XOR<SubscriptionsUpdateWithoutPaymentsInput, SubscriptionsUncheckedUpdateWithoutPaymentsInput>
  }

  export type SubscriptionsUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingDays?: NullableIntFieldUpdateOperationsInput | number | null
    Plan?: PlansUpdateOneWithoutSubscriptionsNestedInput
  }

  export type SubscriptionsUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingDays?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlanningEntryCreateManyRecipeInput = {
    id?: number
    userId: string
    nbPortions: number
  }

  export type PlanningEntryUpdateWithoutRecipeInput = {
    userId?: StringFieldUpdateOperationsInput | string
    nbPortions?: IntFieldUpdateOperationsInput | number
  }

  export type PlanningEntryUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    nbPortions?: IntFieldUpdateOperationsInput | number
  }

  export type PlanningEntryUncheckedUpdateManyWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    nbPortions?: IntFieldUpdateOperationsInput | number
  }

  export type SubscriptionsCreateManyPlanInput = {
    id?: string
    userId: string
    status: number
    startDate?: Date | string
    remainingDays?: number | null
  }

  export type SubscriptionsUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingDays?: NullableIntFieldUpdateOperationsInput | number | null
    Payments?: PaymentsUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionsUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingDays?: NullableIntFieldUpdateOperationsInput | number | null
    Payments?: PaymentsUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionsUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingDays?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentsCreateManySubscriptionInput = {
    id?: number
    userId: string
    amount: number
    paymentDate?: Date | string
  }

  export type PaymentsUpdateWithoutSubscriptionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
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