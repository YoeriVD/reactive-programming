## IEnumerable

```csharp
interface IEnumerable<out T>
{
  IEnumerator<T> GetEnumerator();
}

interface IEnumerator<out T> : IDisposable
{
  //1) eigenlijk bestaat dit niet in .NET
  //2) bool omvat maar 2 waarden
  (bool | Exception) MoveNext();
  T     GetCurrent();
}

```