## IEnumerable

```csharp
interface IEnumerable<out T>
{
  IEnumerator<T> GetEnumerator();
}

interface IEnumerator<out T> : IDisposable
{
  bool  MoveNext();
  T     Current { get; } //<-- Properties zijn METHODS!
  void  Reset();
}
```