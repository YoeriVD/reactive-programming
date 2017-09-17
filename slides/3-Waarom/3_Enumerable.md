## IEnumerable

```csharp
interface IEnumerable<out T>
{
  IEnumerator<T> GetEnumerator();
}

interface IEnumerator<out T> : IDisposable
{
  bool  MoveNext();
  T     GetCurrent();
  void  Reset(); // <-- had nooit mogen bestaan ... 
}

```