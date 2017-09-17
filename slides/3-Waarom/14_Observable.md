## Observable

```csharp
interface IObservable<out T>
{
  IDisposable Subscribe(IObserver<T> observer);
}

interface IObserver<in T>
{
  void   OnNext(T value);
  void   OnCompleted();
  void   OnError(Exception exception);
}
```