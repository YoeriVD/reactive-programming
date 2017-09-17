## IEnumerable

```csharp
interface IEnumerable<out T>
{
  IEnumerator<T> GetEnumerator();
}

interface IEnumerator<out T> : IDisposable
{
  bool  MoveNext() throws Exception; // <-- eigenlijk output...
  T     GetCurrent();
}

```