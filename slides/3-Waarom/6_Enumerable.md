## IEnumerable

```csharp
interface IEnumerable<out T>
{
  IEnumerator<T> GetEnumerator();
}

interface IEnumerator<out T> : IDisposable
{
  //en eigenlijk slaagt die false ook op 'niks'
  (T | false | Exception) MoveNext();
}
```