## Omkeren

```csharp
interface IEnumerable<out T>
{
  (IEnumerator<T> & IDisposable) GetEnumerator();
}

interface IEnumerator<out T> //variantie zal omkeren
{
    // hernoemen en input/output omkeren
  (T | void | Exception) MoveNext();
}

```