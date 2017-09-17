## Omkeren

```csharp
interface IEnumerable<out T>
{
  // de enumerator is eigenlijk de data bron 
  // en de 'Get' slaagt ook nergens op
  (IEnumerator<T> & IDisposable) GetEnumerator();
}
// betere naam? Bestaande patronen?
interface IEnumeratorDual<in T>
{
  void   OnNext(T value);
  void   OnCompleted();
  void   OnError(Exception exception);
}
```