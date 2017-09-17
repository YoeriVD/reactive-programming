## IEnumerable

```csharp
interface IEnumerable<out T>
{
  //hypothetische syntax
  (IEnumerator<T> & IDisposable) GetEnumerator();
}

interface IEnumerator<out T>
{
  (T | void | Exception) MoveNext();
}

```