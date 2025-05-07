// Utility Types in TypeScript

// Base interface for examples
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    isAdmin: boolean;
}

// Partial<T>
type PartialUser = Partial<User>;
const updateUser = (user: User, updates: PartialUser) => {
    return { ...user, ...updates };
};

// Required<T>
interface PartialPoint {
    x?: number;
    y?: number;
}
type Point = Required<PartialPoint>;

// Readonly<T>
type ReadonlyUser = Readonly<User>;
const user: ReadonlyUser = {
    id: 1,
    name: "John",
    email: "john@example.com",
    age: 30,
    isAdmin: false
};
// user.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property

// Record<K, T>
type UserRoles = "admin" | "user" | "guest";
type RoleDescription = Record<UserRoles, string>;

const roleDescriptions: RoleDescription = {
    admin: "Full access",
    user: "Limited access",
    guest: "View only"
};

// Pick<T, K>
type UserBasicInfo = Pick<User, "name" | "email">;
const basicInfo: UserBasicInfo = {
    name: "John",
    email: "john@example.com"
};

// Omit<T, K>
type UserWithoutId = Omit<User, "id">;
const newUser: UserWithoutId = {
    name: "Jane",
    email: "jane@example.com",
    age: 25,
    isAdmin: false
};

// Exclude<T, U>
type NumericOrString = number | string | boolean;
type StringOnly = Exclude<NumericOrString, number | boolean>;

// Extract<T, U>
type StringAndNumber = Extract<NumericOrString, string | number>;

// NonNullable<T>
type NullableString = string | null | undefined;
type DefinitelyString = NonNullable<NullableString>;

// ReturnType<T>
function createUser(name: string, age: number): User {
    return { id: Date.now(), name, age, email: "", isAdmin: false };
}
type CreateUserReturn = ReturnType<typeof createUser>;

// Parameters<T>
type CreateUserParams = Parameters<typeof createUser>;

// InstanceType<T>
class UserManager {
    private users: User[] = [];
    addUser(user: User) {
        this.users.push(user);
    }
}
type UserManagerInstance = InstanceType<typeof UserManager>;

// ThisType<T>
interface ThisUser {
    name: string;
    greet(): void;
}

const user2: ThisUser & ThisType<{ age: number }> = {
    name: "John",
    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
    }
};

// Uppercase<T>
type UppercaseRole = Uppercase<"admin">;  // "ADMIN"

// Lowercase<T>
type LowercaseRole = Lowercase<"ADMIN">;  // "admin"

// Capitalize<T>
type CapitalizedRole = Capitalize<"admin">;  // "Admin"

// Uncapitalize<T>
type UncapitalizedRole = Uncapitalize<"Admin">;  // "admin"

// Template Literal Types with Utility Types
type UserEvent = `user_${Lowercase<UserRoles>}_event`;

// Combining Multiple Utility Types
type PartialReadonlyUser = Readonly<Partial<User>>;

// Custom Utility Types
type Nullable<T> = T | null;
type Optional<T> = T | undefined;
type Maybe<T> = T | null | undefined;

// Conditional Types with Utility Types
type IsString<T> = T extends string ? true : false;
type StringCheck = IsString<"hello">;  // true
type NumberCheck = IsString<42>;       // false

// Mapped Types with Utility Types
type OptionalFlags<T> = {
    [K in keyof T]: boolean;
};

type UserFlags = OptionalFlags<User>;

// Deep Partial Utility Type
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Mutable Utility Type (removes readonly)
type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
}; 