## IEnumerable

```csharp
interface IEnumerable<out T>
{
  IEnumerator<T> GetEnumerator();
}

interface IEnumerator<out T> : IDisposable //<-- dit zijn ook 2 types ...>
{
  (T | void | Exception) MoveNext();
}
```