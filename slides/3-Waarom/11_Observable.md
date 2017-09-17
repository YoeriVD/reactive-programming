## Omkeren

```csharp
interface IEnumerable<out T>
{
  (IEnumerator<T> & IDisposable) GetEnumerator();
}

interface IEnumeratorDual<in T>
{
    // dit kunnen we in .NET!
  void   OnNext(T | void | Exception);
}
```